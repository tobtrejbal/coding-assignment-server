import Block from "./Block";
import Comment from "./Comment";

export default class Product {
    id: number = -1;
    title: string = '';
    imageUrl: string = '';
    blocks: Block[] = [];
    comments: Comment[] = [];

    addComment(comment: Comment) {
        comment.id = this.comments.reduce((max, comment) => max > comment.id ? max : comment.id, 0) + 1;
        this.comments.push(comment);
        return comment;
    }
}