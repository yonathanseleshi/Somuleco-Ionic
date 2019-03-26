import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UnauthenticatedPage } from './unauthenticated.page';

const routes: Routes = [
  {
    path: '',
    component: UnauthenticatedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UnauthenticatedPage]
})
export class UnauthenticatedPageModule {}
