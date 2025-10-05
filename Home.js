const express = require("express");
const router = express.Router();


//Home Router
router.get("/", (req, res) => {
    res.json({ 
        message: 'Running Inventory API...'});
});

module.exports = router;