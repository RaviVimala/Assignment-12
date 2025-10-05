const express = require("express");
const Router = express.Router();

Router.get('/', ( req, res ) => {
    res.json({ Message: 'Server Healthy', Time:new Date().toISOString() });
});


module.exports = Router;