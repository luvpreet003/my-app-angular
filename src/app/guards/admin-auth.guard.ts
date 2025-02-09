import {
  CanActivateChildFn,
  CanActivateFn,
  CanDeactivateFn,
} from '@angular/router';

export const adminAuthGuard: CanActivateFn = (route, state) => {
  return true;
};

export const adminChildAuthGuard: CanActivateChildFn = (route, state) => {
  return false;
};

export interface CanComponentDeactivate {
  canDeactivate: () => boolean | Promise<boolean>;
}

export const AdminAuthDeactivateGuard: CanDeactivateFn<
  CanComponentDeactivate
> = (component) => {
  return component.canDeactivate ? component.canDeactivate() : true;
};

export interface CanComponentActivate {
  canActivate: () => boolean | Promise<boolean>;
}

export const adminTeacherAuthGuard: CanActivateFn = (route, state) => {
  return true;
};
