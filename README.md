# Products API

## Launching the application
- Clone the application by typing in the terminal ```git clone https://github.com/arekM977/node-product```<br/>   
- To run the application, write to the console ```node index.js```

## Create product

```http
  POST localhost:3000/products
```

Example JSON request
```
{
    "Name": "Produkt nr 1",
    "Price": 54.30
}
```

## Get all products

```http
  GET localhost:3000/products
```

## Get product by ID

```http
  GET localhost:3000/products/<id>
```

## Update product

```http
  PATCH localhost:3000/products/<id>
```

Example JSON request
```
{
    "Name": "Nowa nazwa produktu 1",
    "Price": 62.2
}
```

## Delete product

```http
  DELETE localhost:3000/products/<id>
```


