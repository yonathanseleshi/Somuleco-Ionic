import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.page.html',
  styleUrls: ['./authenticated.page.scss'],
})
export class AuthenticatedPage implements OnInit {


    public appPages = [
        {
            title: 'Learning Feed',
            url: '/learningfeed',
            icon: 'home'
        },
        {
            title: 'community',
            url: '/socialfeed',
            icon: 'list'
        },
        {
            title: 'Library',
            url: '/library',
            icon: 'list'
        },
        {
            title: 'community',
            url: '/socialfeed',
            icon: 'list'
        },
        {
            title: 'community',
            url: '/socialfeed',
            icon: 'list'
        }
    ];

    openAuthenticatedMenu() {
        this.menu.enable(true, 'authenticatedMenu');
        this.menu.open('authenticatedMenu');
    }


    closeAuthenticatedMenu() {
        this.menu.enable(true, 'authenticatedMenu');
        this.menu.close('authenticatedMenu');
    }
  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

}
