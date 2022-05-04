import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageCenterComponent } from './message-center/message-center.component';
import { AdminWorkspaceRoutingModule } from './admin-workspace-routing.module';
import { UserPermissionGuardService } from './user-permission-guard.service';
@NgModule({
  imports: [CommonModule, AdminWorkspaceRoutingModule],
  declarations: [MessageCenterComponent],
  providers: [UserPermissionGuardService],
})
export class AdminWorkspaceModule {}
