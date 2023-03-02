const express = require('express');
const router = express.Router();

router.get('/:name', (req, res) => {
    res.json(req.params.name)
})

router.get('/', (req, res) => {
    res.json({name: 'red', name1: 'purple'})
})

module.exports = router;