const express = require('express');
const app = express.Router();
const controller = require('../controllers/ProductController');

app.get('/getallproducts', controller.getAllProducts);
app.get('/getproduct/:id', controller.getProductById);
app.post('/createproduct', controller.createProduct);
app.put('/updateproduct/:id', controller.updateProduct);
app.delete('/deleteproduct/:id', controller.deleteProduct);

module.exports = app;
