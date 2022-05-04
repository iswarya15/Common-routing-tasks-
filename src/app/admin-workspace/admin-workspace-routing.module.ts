import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageCenterComponent } from './message-center/message-center.component';
import { UserPermissionGuardService } from './user-permission-guard.service';
const routes: Routes = [
  {
    path: '',
    component: MessageCenterComponent,
    data: {
      title: 'Admin Workspace - Message Center',
    },
    canActivate: [UserPermissionGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminWorkspaceRoutingModule {}
