import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface UserResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

@Injectable({
  providedIn: 'root',
})
export class UserListService {
  private readonly http = inject(HttpClient);
  private readonly API_URL = 'https://reqres.in/api/users';

  public getUsers(): Observable<UserResponse> {
    return this.http.get<UserResponse>(this.API_URL);
  }
}
