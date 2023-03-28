import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import {MediaMatcher} from '@angular/cdk/layout';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  isOpen: boolean = false;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  mobileQuery: MediaQueryList;
  constructor(
    private observer: BreakpointObserver,
    public authService: AuthService,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 600px)'])
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }
}
