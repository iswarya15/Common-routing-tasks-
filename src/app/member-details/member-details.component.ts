import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, of, switchMap } from 'rxjs';
import { TaskListService } from './task-list.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css'],
})
export class MemberDetailsComponent implements OnInit {
  tasks$: Observable<any>;
  selectedId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private taskListService: TaskListService
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      console.log('Query Params => ', params);
    });
  }
}
