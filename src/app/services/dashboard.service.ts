import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http'
import { Thread } from '../models/thread'
import { AppConfigService } from '../services/app-config.service'

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    constructor(private httpClient: HttpClient, private appConfigService: AppConfigService) { }

    getThreads(): Observable<any> {
        return this.httpClient.get(this.appConfigService.baseUrl + '/r/worldnews.json').pipe(
            map(res => {
                return res['data']['children'].map(thread => {
                    let t = thread['data'];
                    return new Thread(t['title'], t['author'], t['permalink'], t['url']);
                });
            }
            )
        );
    }
}
