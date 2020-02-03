import { Reply } from './reply';

export class Thread {
    id: string;
    title: string;
    author: string;
    score: number;
    permalink: string;
    url: string;
    createdTime: Date;
    linkFlairText: string;
    num_comments: number;
    content: string;
    replies: Reply[];

    constructor(t: any) {
        this.id = t['id'];
        this.title = t['title'];
        this.author = t['author'];
        this.score = t['score'];
        this.permalink = t['permalink'];
        this.linkFlairText = t['link_flair_text'];
        this.num_comments = t['num_comments'];
        this.createdTime = new Date(t['created'] * 1000);
        this.content = t['selftext'];
        this.replies = [];
    }
}