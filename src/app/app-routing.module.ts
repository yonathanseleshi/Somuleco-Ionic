import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'confirmation', loadChildren: './confirmation/confirmation.module#ConfirmationPageModule' },
  { path: 'learning-feed', loadChildren: './learning-feed/learning-feed.module#LearningFeedPageModule' },
  { path: 'social-feed', loadChildren: './social-feed/social-feed.module#SocialFeedPageModule' },
  { path: 'library', loadChildren: './library/library.module#LibraryPageModule' },
  { path: 'learning-profile', loadChildren: './learning-profile/learning-profile.module#LearningProfilePageModule' },
  { path: 'wallet', loadChildren: './wallet/wallet.module#WalletPageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
  { path: 'my-library', loadChildren: './my-library/my-library.module#MyLibraryPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'explore', loadChildren: './explore/explore.module#ExplorePageModule' },
  { path: 'course', loadChildren: './course/course.module#CoursePageModule' },
  { path: 'lesson', loadChildren: './lesson/lesson.module#LessonPageModule' },
  { path: 'authenticated', loadChildren: './authenticated/authenticated/authenticated.module#AuthenticatedPageModule' },
  { path: 'unauthenticated', loadChildren: './unauthenticated/unauthenticated/unauthenticated.module#UnauthenticatedPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
