import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take, tap, from } from 'rxjs';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
})
export class MemberListComponent implements OnInit {
  usersList = [
    {
      id: 1,
      role: 'Admin',
      name: 'Lim',
      link: 'admin-portal',
    },
    {
      id: 2,
      role: 'Member',
      name: 'Veronica',
      link: 'member-details',
    },
  ];
  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {}
  goToSelectedPortal(portal) {
    console.log(portal);
    this.router.navigate([portal.link], {
      relativeTo: this.activatedRoute,
    });
    // this.router.navigate(['/member-list/', portal.link, { id: portal.id }]);
  }
}
