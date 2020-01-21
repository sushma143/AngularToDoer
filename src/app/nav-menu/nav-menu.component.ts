import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  username: string;

  constructor(public authSvc: AuthService) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
  }

}
