import express from 'express';
import MemoryDB from "./lib/MemoryDB";
import products from './data/products.json'
import Comment from "./model/Comment";

const app = express();
app.use(express.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
  );
  next();
});
const PORT = 3333;

const memory = MemoryDB.fromJSON(products);

app.get('/', (req, res) => {
    res.redirect('/products');
})

app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    const result = memory.products.find(product => product.id === parseInt(id));
    if (result)
        res.send(JSON.stringify(result));
    else res.status(404).send(`Product with id: ${id} was not found.`);
});

app.get('/products', (req, res) => {
    res.send(JSON.stringify(memory.products));
});

app.post('/comments', (req, res) => {
	const {productId, parentId, authorName, dateGmt, content} = req.body;
    const comment = new Comment(-1, productId, parentId, authorName, dateGmt, content);
    const product = memory.products.find(product => product.id == comment.productId)
    if (!product)
        res.status(404).send(`Product with id: ${comment.productId} was not found.`);
    else {
        if (comment.parentId == null || product.comments.map(comment => comment.id).includes(comment.parentId))
            res.send(JSON.stringify(product.addComment(comment)));
        else res.status(404).send(`Parent comment with id ${comment.parentId} not found`);
    }

});

app.listen(PORT, async () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});