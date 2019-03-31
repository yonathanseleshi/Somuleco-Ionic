import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

    isAuthenticated = false;

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

    constructor(private router: Router, private menu: MenuController) {}


    ngOnInit(): void {

    }


    ionViewDidLoad() {

        if (this.isAuthenticated) {
            this.router.navigate(['/authenticated']);
        } else {

            this.router.navigate(['/unauthenticated']);

        }
    }

    openAuthenticatedMenu() {
        this.menu.enable(true, 'authenticatedMenu');
        this.menu.open('authenticatedMenu');
    }


    closeAuthenticatedMenu() {
        this.menu.enable(true, 'authenticatedMenu');
        this.menu.close('authenticatedMenu');
    }


}
