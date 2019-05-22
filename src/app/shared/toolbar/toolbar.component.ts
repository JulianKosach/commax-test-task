import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  routeUrl: string;
  lastScrolled: number;
  showToolbar: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.lastScrolled = 0;
    this.showToolbar = true;
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.routeUrl = val.url;
      }
    });
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    const scrollTop = event.target.scrollingElement.scrollTop;
    if (this.lastScrolled > scrollTop || scrollTop < 60) {
      this.showToolbar = true;
    } else {
      this.showToolbar = false;
    }
    this.lastScrolled = scrollTop;
  }

  goBack() {
    this.location.back();
  }
}
