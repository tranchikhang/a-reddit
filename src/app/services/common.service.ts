import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http'
import { Thread } from '../models/thread'
import { AppConfigService } from '../services/app-config.service'

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    constructor(private httpClient: HttpClient, private appConfigService: AppConfigService) { }

    getFrontPage() {
        return this.getThreads('/');
    }

    getSubreddit(subreddit: String) {
        return this.getThreads('/r/' + subreddit);
    }

    getThreads(path: String): Observable<any> {
        return this.httpClient.get(this.appConfigService.baseUrl + path + '.json').pipe(
            map(res => {
                return res['data']['children'].map(thread => {
                    return new Thread(thread['data']);
                });
            }
            )
        );
    }
}
