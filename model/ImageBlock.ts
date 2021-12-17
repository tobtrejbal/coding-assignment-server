import TextBlock from "./TextBlock";

export default class ImageBlock extends TextBlock {
    imgUrl: string;

    constructor(id: number, type: string, text: string, imgUrl: string) {
        super(id, type, text);
        this.imgUrl = imgUrl;
    }
}