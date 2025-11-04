const express = require('express');
const app = express.Router();
const controller = require('../controllers/MagasinController');

app.get('/getallmagasins', controller.getAllMagasins);
app.get('/getmagasin/:id', controller.getMagasinById);
app.post('/createmagasin', controller.createMagasin);
app.put('/updatemagasin/:id', controller.updateMagasin);
app.delete('/deletemagasin/:id', controller.deleteMagasin);

module.exports = app;
