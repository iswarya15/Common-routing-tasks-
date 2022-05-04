import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { Observable, of, map } from 'rxjs';

@Injectable()
export class UserPermissionGuardService
  implements CanActivate, CanActivateChild
{
  constructor(private router: Router) {}

  canActivate(): boolean {
    let result: boolean;
    of(0)
      .pipe(map((x) => !!x))
      .subscribe((grantAccess) => {
        console.log('Does the User have admin access => ', grantAccess);
        result = grantAccess;
        if (!grantAccess) {
          alert('You do not have admin Permission');
          this.router.navigate(['/member-overview'], {
            queryParams: { auth: false },
          });
        }
      });
    return result;
  }
  canActivateChild(): boolean {
    console.log('Has no access to Child routes');
    alert('Only admins can access Admin & Member Portal!');
    return true;
  }
}
