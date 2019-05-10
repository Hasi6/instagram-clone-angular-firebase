import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AllPostsComponent} from './all-posts/all-posts.component';
import {FollowingComponent} from './following/following.component';
import {FavouriteComponent} from './favourite/favourite.component';
import {MyPostsComponent} from './my-posts/my-posts.component';
import {NgModule} from '@angular/core';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'allposts', component: AllPostsComponent},
  {path: 'following', component: FollowingComponent},
  {path: 'favourite', component: FavouriteComponent},
  {path: 'myposts', component: MyPostsComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}