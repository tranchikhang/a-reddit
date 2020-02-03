export class Reply {
    id: string;
    content: string;
    author: string;
    score: number;
    permalink: string;
    createdTime: Date;
    replies: Reply[];

    constructor(r: any) {
        this.id = r['id'];
        this.author = r['author'];
        this.score = r['ups'];
        this.content = r['body_html']
        this.permalink = r['permalink'];
        this.createdTime = new Date(r['created'] * 1000);
        this.replies = [];

        if (r['replies']) {
            r['replies']['data']['children'].forEach(reply => {
                if (reply['kind'] != 'more') {
                    let r = new Reply(reply['data']);
                    this.replies.push(r);
                }
            });
        }
    }
}