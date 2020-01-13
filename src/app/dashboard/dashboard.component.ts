import { Component, OnInit } from '@angular/core';
import { Thread } from '../models/thread'
import { DashboardService } from '../services/dashboard.service'

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    threads: Thread[];

    constructor(private dashboardService: DashboardService) {
        this.threads = []
    }

    ngOnInit() {
        this.getThreads();
    }

    getThreads() {
        this.dashboardService.getThreads().subscribe(res => {
            this.threads = res;
        })
    }
}
