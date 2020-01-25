import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { SubredditComponent } from './components/subreddit/subreddit.component'
import { ThreadComponent } from './components/thread/thread.component'


const routes: Routes = [
    {
        path: '', component: DashboardComponent
    },
    {
        path: 'r/:subreddit', component: SubredditComponent
    },
    {
        path: 'r/:subreddit/comments/:id/:permalink', component: ThreadComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
