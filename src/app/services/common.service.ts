import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http'
import { Thread } from '../models/thread'
import { Reply } from '../models/reply'
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

    getComments(subreddit: string, id: string): Observable<Thread> {
        return this.httpClient.get(this.appConfigService.baseUrl + eval('`' + this.appConfigService.threadUrlFormat + '`') + '.json').pipe(
            map(res => {
                let t = new Thread(res[0]['data']['children'][0]['data']);
                res[1]['data']['children'].forEach(reply => {
                    if (reply['kind'] != 'more') {
                        let r = new Reply(reply['data']);
                        t.replies.push(r);
                    }
                });
                return t;
            }
            )
        );
    }
}
