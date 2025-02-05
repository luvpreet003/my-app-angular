import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

interface UserResponse {
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class UserDetailService {
  private readonly http = inject(HttpClient);
  private readonly API_URL = 'https://reqres.in/api/users';

  public getUserById(id: number): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.API_URL}/${id}`);
  }
}
