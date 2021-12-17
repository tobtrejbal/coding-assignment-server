import Block from "./Block";

export default class TextBlock extends Block {
    text: string;
    constructor(id: number, type: string, text: string) {
        super(id, type);
        this.text = text;
    }
}