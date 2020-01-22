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

    loadFrontpage() {
        this.commonService.getFrontPage().subscribe(res => { this.threads = res });
    }

    toSubreddit() {
        this.router.navigate(['/r/' + this.subredditInput.value]);
    }
}
