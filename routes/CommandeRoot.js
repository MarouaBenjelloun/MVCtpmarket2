const express = require('express');
const app = express.Router();
const controller = require('../controllers/CommandeController');

app.get('/getallcommandes', controller.getAllCommandes);
app.get('/getcommande/:id', controller.getCommandeById);
app.post('/createcommande', controller.createCommande);
app.put('/updatecommande/:id', controller.updateCommande);
app.delete('/deletecommande/:id', controller.deleteCommande);

module.exports = app;
