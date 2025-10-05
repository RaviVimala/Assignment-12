const express = require('express');
const Router = express.Router();
const Item = require('../Model/item');


//GET Method Running
Router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({error: err.message});        
    }
});

//POST Method Running
Router.post('/', async (req, res) => {
    try {
        const { name, quantity, price } = req.body;
        const item = new Item ({ name, quantity, price });
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({Error: err.message});
    }
});

module.exports = Router;