import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService }      from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public items:Array<string> = ['The first choice!',
    'And another choice for you.', 'but wait! A third!'];

  constructor(private router: Router, private auth: AuthService) {
  }
  ngOnInit() {
  }

  isRouteActive(instrction: string): boolean {
    return this.router.isActive(instrction, true);
  }

  doLogout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}
