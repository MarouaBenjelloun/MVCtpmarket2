const express = require('express');
const app = express.Router();
const controller = require('../controllers/BlogController');

app.get('/getallblogs', controller.getAllBlogs);
app.get('/getblog/:id', controller.getBlogById);
app.post('/createblog', controller.createBlog);
app.put('/updateblog/:id', controller.updateBlog);
app.delete('/deleteblog/:id', controller.deleteBlog);

module.exports = app;
