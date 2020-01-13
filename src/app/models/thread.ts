export class Thread {
    title: string;
    author: string;
    permalink: string;
    url: string;
    createdDate: Date;

    constructor(title:string, author: string, permalink: string, url: string) {
        this.title = title;
        this.author = author;
        this.permalink = permalink;
        this.url = url;
    }
}