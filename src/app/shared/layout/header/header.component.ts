import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public items:Array<string> = ['The first choice!',
    'And another choice for you.', 'but wait! A third!'];

  constructor(private router: Router) {
  }
  ngOnInit() {
  }

  isRouteActive(instrction: string): boolean {
    return this.router.isActive(instrction, true);
  }

}
