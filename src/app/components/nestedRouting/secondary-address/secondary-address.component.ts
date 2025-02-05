import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-secondary-address',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './secondary-address.component.html',
  styleUrl: './secondary-address.component.scss',
})
export class SecondaryAddressComponent {}
