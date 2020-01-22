import { Component, OnInit } from '@angular/core';
import { Thread } from '../../models/thread'
import { CommonService } from '../../services/common.service'
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-subreddit',
    templateUrl: './subreddit.component.html',
    styleUrls: ['./subreddit.component.scss']
})
export class SubredditComponent implements OnInit {

    threads: Thread[];
    subreddit: String;

    constructor(private commonService: CommonService, private route: ActivatedRoute) {
        this.threads = [];
        this.subreddit = this.route.snapshot.paramMap.get('subreddit');
    }

    ngOnInit() {
        this.loadSubreddit();
    }

    loadSubreddit() {
        this.commonService.getSubreddit(this.subreddit).subscribe(res => {
            this.threads = res;
        })
    }

}
