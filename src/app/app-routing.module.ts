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
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './pages/list/list.module#ListPageModule'
  },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'confirmation', loadChildren: './pages/confirmation/confirmation.module#ConfirmationPageModule' },
  { path: 'learning-feed', loadChildren: './pages/learning-feed/learning-feed.module#LearningFeedPageModule' },
  { path: 'social-feed', loadChildren: './pages/social-feed/social-feed.module#SocialFeedPageModule' },
  { path: 'library', loadChildren: './pages/library/library.module#LibraryPageModule' },
  { path: 'learning-profile', loadChildren: './pages/learning-profile/learning-profile.module#LearningProfilePageModule' },
  { path: 'wallet', loadChildren: './pages/wallet/wallet.module#WalletPageModule' },
  { path: 'cart', loadChildren: './pages/cart/cart.module#CartPageModule' },
  { path: 'chat', loadChildren: './pages/chat/chat.module#ChatPageModule' },
  { path: 'my-library', loadChildren: './pages/my-library/my-library.module#MyLibraryPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'explore', loadChildren: './pages/explore/explore.module#ExplorePageModule' },
  { path: 'course', loadChildren: './pages/course/course.module#CoursePageModule' },
  { path: 'lesson', loadChildren: './pages/lesson/lesson.module#LessonPageModule' },
  { path: 'authenticated', loadChildren: './pages/authenticated/authenticated/authenticated.module#AuthenticatedPageModule' },
  { path: 'unauthenticated', loadChildren: './pages/unauthenticated/unauthenticated/unauthenticated.module#UnauthenticatedPageModule' },
  { path: 'welcome', loadChildren: './pages/welcome/welcome.module#WelcomePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
