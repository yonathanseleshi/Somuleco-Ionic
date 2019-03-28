import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-authenticated-drawer',
  templateUrl: './authenticated-drawer.component.html',
  styleUrls: ['./authenticated-drawer.component.scss'],
})
export class AuthenticatedDrawerComponent implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {}


   closeMenu(){

    this.menu.close();

   }

    openMenu() {
        this.menu.open('end');
    }


}
