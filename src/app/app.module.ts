import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Components
import {AuthenticatedPage} from './pages/authenticated/authenticated/authenticated.page';
import {AuthenticatedComponent} from './components/authenticated/authenticated.component';
import {UnauthenticatedComponent} from './components/unauthenticated/unauthenticated.component';


@NgModule({
  declarations: [
      AppComponent,
      UnauthenticatedComponent,
      AuthenticatedComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
      ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
