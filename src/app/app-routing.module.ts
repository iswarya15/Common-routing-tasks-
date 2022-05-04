import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  RouterStateSnapshot,
  PreloadAllModules,
} from '@angular/router';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';

import { HelloComponent } from './hello.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { MemberListComponent } from './member-list/member-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserPermissionGuardService } from './admin-workspace/user-permission-guard.service';

const routes: Routes = [
  {
    path: 'hello',
    component: HelloComponent,
    data: {
      title: 'Hello - Get Started',
    },
  },
  {
    path: 'member-list',
    component: MemberListComponent,
    data: {
      title: 'Member List',
    },
    canActivateChild: [UserPermissionGuardService],
    children: [
      {
        path: 'member-details',
        component: MemberDetailsComponent,
        data: {
          title: 'Member Portal',
        },
      },
      {
        path: 'admin-portal',
        component: AdminPortalComponent,
        data: {
          title: 'Admin Console',
        },
      },
    ],
  },
  {
    path: 'member-overview',
    loadChildren: () =>
      import('./member-management/member-management.module').then(
        (m) => m.MemberManagementModule
      ),
    // component: MemberOverviewComponent,
  },
  {
    path: 'admin-workspace',
    loadChildren: () =>
      import('./admin-workspace/admin-workspace.module').then(
        (m) => m.AdminWorkspaceModule
      ),
    // canActivate: [UserPermissionGuardService],
  },
  {
    path: '',
    redirectTo: 'hello',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: {
      title: '404 - Page not Found',
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
