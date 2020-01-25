import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service'

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    subredditInput = new FormControl('');

    constructor(private commonService: CommonService, private router: Router) {
    }

    ngOnInit() {
    }

    toSubreddit(): void {
        this.router.navigate(['/r/' + this.subredditInput.value]);
    }

}
