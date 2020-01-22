import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Thread } from '../../models/thread';

@Component({
    selector: 'app-thread-list',
    templateUrl: './thread-list.component.html',
    styleUrls: ['./thread-list.component.scss']
})
export class ThreadListComponent implements OnInit, OnChanges {

    @Input()
    threads: Thread[];

    constructor() {
    }

    ngOnInit() {
    }

    ngOnChanges(changes: any) {
        if (changes['threads']) {
            this.threads = changes['threads'].currentValue;
        }
    }
}