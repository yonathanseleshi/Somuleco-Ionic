import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.page.html',
  styleUrls: ['./authenticated.page.scss'],
})
export class AuthenticatedPage implements OnInit {


    public appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'List',
            url: '/list',
            icon: 'list'
        }
    ];



  constructor() { }

  ngOnInit() {
  }

}
