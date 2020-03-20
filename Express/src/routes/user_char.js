const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/', async(req,res)=>{
    const data = await pool.query('SELECT * FROM characteristicuser ')
    res.send(data);
});

router.post('/', async(req, res)=>{
    const { UserID, CharacteristicID, valueChar } = req.body;
    const data = {
        UserID, CharacteristicID, valueChar
    };
    await pool.query('INSERT INTO characteristicuser SET ?', data)
    res.send(data);
});

module.exports = router;
