import { Component, OnInit } from '@angular/core';
import { Thread } from '../../models/thread'
import { FormControl } from '@angular/forms';
import { CommonService } from '../../services/common.service'
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    subredditInput = new FormControl('');
    threads: Thread[];

    constructor(private commonService: CommonService, private router: Router) {
        this.threads = [];
    }

    ngOnInit() {
        this.loadFrontpage();
    }

    loadFrontpage(): void {
        this.commonService.getFrontPage().subscribe(res => { this.threads = res });
    }

    toSubreddit(): void {
        this.router.navigate(['/r/' + this.subredditInput.value]);
    }
}
