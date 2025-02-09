import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { Roles } from './components/Roles';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { ChildComponent } from './components/child/child/child.component';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'LP';
  ex1 = 'Example 1';
  ex2 = 'Example 2';
  childAge = 10;
  counterFromChild: number = 0;
  showNavbar = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showNavbar = !event.url.includes('/signup');
      }
    });
  }

  show(val: string) {
    this.title = val;
  }

  isDisabled() {
    return Roles.Admin.toString() === 'Admin';
  }

  accessCounter(val: number) {
    console.log('counter in parent', val);
    this.counterFromChild = val;
  }
}
