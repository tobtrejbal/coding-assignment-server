import Block from "./Block";

export default class ListBlock extends Block {
    items: string[];
    constructor(id: number, type: string, items: string[]) {
        super(id, type);
        this.items = items;
    }
}