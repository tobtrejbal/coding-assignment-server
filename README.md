# Coding assignment - React server
In this repository you will find very simple Express.js server you will use as a backend
mock for your React application.

## Usage
1. Clone this repository and install dependencies using npm.
```
npm install
```
2. Run the server in watch mode using specified package.json script.
```
npm run start
```

## Data
The server API is designed to provide you with products (see structure in `model/Product.ts`). You can query all products or filter them by `id`. See more in section `Endpoints`.

The server itself has no persistence layer, if you restart it all the changes will be lost.
In file `data/products.json` there is an example product prepared for you. If you wish, you can create your own test data this way.
This file is loaded into the memory on the server startup.

## Endpoints
- GET /products - Returns JSON encoded list of all products.
- GET /products/:id - Returns JSON encoded product selected by provided `id` number.
- POST /comments - Accepts JSON encoded Comment with following structure 
```
 {
        "productId": number,
        "parentId": number,
        "authorName": string,
        "dateGmt": string,
        "content": string
}
```


