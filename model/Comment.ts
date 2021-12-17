export default class Comment {
    id: number;
    productId: number;
    parentId: number | null;
    authorName: string;
    dateGmt: string;
    content: string;

    constructor(id: number, productId: number, parentId: number, authorName: string, dateGmt: string, content: string) {
        this.id = id;
        this.productId = productId;
        this.parentId = parentId;
        this.authorName = authorName;
        this.dateGmt = dateGmt;
        this.content = content;
    }
}