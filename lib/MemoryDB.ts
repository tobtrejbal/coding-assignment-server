import Product from "../model/Product";

export default class MemoryDB {
    products: Product[];

    constructor(products: Product[]) {
        this.products = products;
    }

    static fromJSON(json : any) {
        const products = json.map((item: any) => Object.assign(new Product(), item));
        return new MemoryDB(products);
    }
}