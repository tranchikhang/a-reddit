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
        this.score = r['score'];
        this.content = r['body']
        this.permalink = r['permalink'];
        this.createdTime = new Date(r['created'] * 1000);

        if (r['replies']) {
            this.replies = r['replies']['data']['children'].map(reply => {
                return new Reply(reply['data']);
            });
        }
    }
}