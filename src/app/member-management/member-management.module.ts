import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdCardComponent } from './id-card/id-card.component';
import { MemberOverviewComponent } from './member-overview/member-overview.component';
import { MemberManagementRoutingModule } from './member-management-routing.module';
import { MemberManagementResolverService } from './member-management-resolver.service';
@NgModule({
  imports: [CommonModule, MemberManagementRoutingModule],
  declarations: [IdCardComponent, MemberOverviewComponent],
  providers: [MemberManagementResolverService],
})
export class MemberManagementModule {}
