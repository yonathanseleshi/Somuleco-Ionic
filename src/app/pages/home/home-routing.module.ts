import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {HomePage} from './home.page';



const routes: Routes = [

    {
        path: 'home',
        component: HomePage,
        children: [

            {
                path: 'welcome', children: [{
                    path: '',
                    loadChildren: '../welcome/welcome.module#WelcomePageModule'
                }]

            },
            {
                path: 'explore', children: [{
                    path: '',
                    loadChildren: '../explore/explore.module#ExlporePageModule'
                }]
            },
            {
                path: 'library', children: [{
                    path: '',
                    loadChildren: '../library/library.module#LibraryPageModule'
                }]
            },
            {
                path: '',
                redirectTo: '/welcome',
                pathMatch: 'full'

            }


        ]


    },
    {

        path: '',
        redirectTo: '/welcome',
        pathMatch: 'full'
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class HomeRoutingModule {}
