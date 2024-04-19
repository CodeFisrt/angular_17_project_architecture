import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  debugger;
  const loggeedUser =  localStorage.getItem("EcomUser");
  if(loggeedUser != null) {
    return true;
  } else {
    router.navigateByUrl("login")
    return false;
  }
  
};
