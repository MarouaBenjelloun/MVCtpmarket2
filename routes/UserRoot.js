const express = require('express');
const app = express.Router();
const controller = require('../controllers/UserController');

app.get('/getallusers', controller.getAllUsers);
app.get('/getuser/:id', controller.getUserById);
app.post('/createuser', controller.createUser);
app.put('/updateuser/:id', controller.updateUser);
app.delete('/deleteuser/:id', controller.deleteUser);

module.exports = app;
