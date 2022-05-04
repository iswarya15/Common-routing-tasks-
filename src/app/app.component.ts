import { Component, VERSION } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {}
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    this.router.events
      // using filter operator to listen to NavigationEnd event only
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        console.log(this.activatedRoute);
        let routeData = this.getChild(this.activatedRoute); // get the bottom-most activatedRoute in the routeTree
        routeData.data.subscribe((data) => {
          console.log(data);
          this.titleService.setTitle(data.title);
        });
      });
  }
  getChild(activatedRoute: ActivatedRoute) {
    console.log('Activated Route => ', activatedRoute);
    // if the firstChild prop of activatedRoute is null, we have reached the current activated Route
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }
}
