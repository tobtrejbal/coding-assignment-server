
export default abstract class Block {
    id : number;
    type: string;

    protected constructor(id: number, type: string) {
        this.id = id;
        this.type = type;
    }
}