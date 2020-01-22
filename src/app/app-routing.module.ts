import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { SubredditComponent } from './components/subreddit/subreddit.component'


const routes: Routes = [
    {
        path: '', component: DashboardComponent
    },
    {
        path: 'r/:subreddit', component: SubredditComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
