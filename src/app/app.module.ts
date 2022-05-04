import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MemberListComponent } from './member-list/member-list.component';
import { AppRoutingModule } from './app-routing.module';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { TaskListService } from './member-details/task-list.service';
import { UserPermissionGuardService } from './admin-workspace/user-permission-guard.service';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    MemberListComponent,
    MemberDetailsComponent,
    AdminPortalComponent,
  ],
  providers: [Title, TaskListService, UserPermissionGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
