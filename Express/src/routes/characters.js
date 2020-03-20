const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/', async (req,res)=>{
    const data = await pool.query('select * from characters');
    res.send(data);
});

router.post('/', async (req, res) =>{
    const { charName } = req.body;
    const data = {
        charName
    };

    await pool.query('INSERT INTO characters set ?',[data]);
    console.log(data);
    res.send(data);
});

router.get('/:id', async(req, res)=>{
    const value = req.params.id;
    data = await pool.query('SELECT * FROM characters WHERE id = '+value);
    res.send(data, 200);
});

router.delete('/:id', async (req, res) =>{
    const id = req.params.id;
    await pool.query('DELETE FROM characters WHERE id = '+id);
    res.send('Delete');
});

module.exports = router;
