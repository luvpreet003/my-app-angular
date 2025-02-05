import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-address',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss',
})
export class AddressComponent {}
