import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UnauthenticatedPage } from './unauthenticated.page';
import {UnauthenticatedRoutingModule} from './unauthenticated-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
   UnauthenticatedRoutingModule
  ],
  declarations: [UnauthenticatedPage]
})
export class UnauthenticatedPageModule {}
