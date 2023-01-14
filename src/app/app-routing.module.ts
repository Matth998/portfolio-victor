import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './pages/error404/error404.component';
import { FeedComponent } from './pages/feed/feed.component';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'error-404', component: Error404Component},
  {path: 'feed', component: FeedComponent},
  {path: 'skills', component: SkillsComponent},

  {path: '**', redirectTo: 'error-404', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
