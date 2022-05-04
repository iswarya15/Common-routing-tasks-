import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberOverviewComponent } from './member-overview/member-overview.component';
import { MemberManagementResolverService } from './member-management-resolver.service';
const routes: Routes = [
  {
    path: '',
    component: MemberOverviewComponent,
    resolve: {
      member: MemberManagementResolverService,
    },
    data: {
      title: 'Member Management - Member Overview',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberManagementRoutingModule {}
