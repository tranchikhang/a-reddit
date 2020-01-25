import { Component, OnInit } from '@angular/core';
import { Thread } from '../../models/thread'
import { CommonService } from '../../services/common.service'
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-thread',
    templateUrl: './thread.component.html',
    styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {

    thread: Thread;
    subreddit: string;
    id: string;

    constructor(private commonService: CommonService, private route: ActivatedRoute) {
        this.subreddit = this.route.snapshot.paramMap.get('subreddit');
        this.id = this.route.snapshot.paramMap.get('id');
    }

    ngOnInit() {
        this.loadThread();
    }

    loadThread(): void {
        this.commonService.getComments(this.subreddit, this.id).subscribe(res => {
            this.thread = res;
        })
    }

    toHTML(input): any {
        return new DOMParser().parseFromString(input, "text/html").documentElement.textContent;
    }
}