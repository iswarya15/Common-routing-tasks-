import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { of, Observable } from 'rxjs';

// @Injectable()

export interface Member {
  id: number;
  name: string;
}

export class MemberManagementResolverService implements Resolve<Member> {
  resolve(): Observable<Member> {
    let member: Member = {
      id: 99,
      name: 'Dwight',
    };
    return of(member);
  }

  constructor() {}
}
