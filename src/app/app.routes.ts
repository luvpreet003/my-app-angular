import { Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { AddressComponent } from './components/nestedRouting/address/address.component';
import { PrimaryAddressComponent } from './components/nestedRouting/primary-address/primary-address.component';
import { SecondaryAddressComponent } from './components/nestedRouting/secondary-address/secondary-address.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { LazyComponent } from './components/lazy/lazy.component';
import {
  AdminAuthDeactivateGuard,
  adminAuthGuard,
  adminChildAuthGuard,
} from './guards/admin-auth.guard';
import { TemplateFormsComponent } from './components/forms/template-forms/template-forms.component';
import { ReactiveFormsComponent } from './components/forms/reactive-forms/reactive-forms.component';

export const routes: Routes = [
  { path: 'data-binding', component: DataBindingComponent },
  {
    path: 'directive',
    component: DirectiveComponent,
    canActivate: [adminAuthGuard],
    canDeactivate: [AdminAuthDeactivateGuard],
  },
  { path: 'signup', component: SignUpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  {
    path: 'address',
    component: AddressComponent,
    canActivateChild: [adminChildAuthGuard],
    children: [
      {
        path: 'primaryAddress',
        loadComponent: () =>
          import(
            './components/nestedRouting/primary-address/primary-address.component'
          ).then((m) => m.PrimaryAddressComponent),
      },
      {
        path: 'secondaryAddress',
        component: SecondaryAddressComponent,
      },
    ],
  },
  {
    path: 'users',
    component: UserListComponent,
  },
  {
    path: 'lazy',
    loadComponent: () =>
      import('./components/lazy/lazy.component').then((m) => m.LazyComponent),
  },
  { path: 'templateform', component: TemplateFormsComponent },
  { path: 'reactiveform', component: ReactiveFormsComponent },
];
