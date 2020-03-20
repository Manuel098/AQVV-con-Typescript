const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/', async (req,res)=>{
    const data = await pool.query('select * from users');
    res.send(data);
});

router.get('/char', async(req, res)=>{
    const fila = await pool.query('select * from users');
    var data = [], characte = [];
    var char, tipe;

    for (let i = 0; i < fila.length; i++) {
        char = await pool.query('select * from characteristicuser where UserID = '+fila[i]["id"]);
        if (char.length>0){
            tipe = await pool.query('select * from characters where id = '+char[0]["CharacteristicID"]);
            for (let j = 0; j < char.length; j++) {
                tipe = await pool.query('select * from characters where id = '+char[j]["CharacteristicID"]);
                characte.push({
                    CharacteristicValue: tipe[0]["charName"],
                    characteristicId: char[j]["CharacteristicID"],
                    valueChar: char[j]["valueChar"]
                });
            }
            data.push({
                username:fila[i]["username"],
                user_url:fila[i]["user_url"],
                characteristics: characte
            });
            console.log(char);
            char = null;
            characte = [];
            tipe = null;
        }else{
            data.push({
                username:fila[i]["username"],
                user_url:fila[i]["user_url"]
            });
        }
        if(i == fila.length-1){
            res.status(201).json({
                data
            });
        }
    }
})

router.post('/', async (req, res) =>{
    const { username, user_url, charac } = req.body;
    const data = {
        username, user_url
    };

    const asd = await pool.query('INSERT INTO users set ?',[data]);

    charac.forEach(async element => {
        if(element['newCara']==''){
            const newCarac = {
                UserID:asd['insertId'],
                CharacteristicID: element['caracter'],
                valueChar: element['value']
            }
            await pool.query('INSERT INTO characteristicuser set ?',[newCarac]);
        }else{
            const newCarac = {
                charName:element['newCara'],
            }
            const charName = await pool.query('INSERT INTO characters set ?',[newCarac]);
            console.log(element);
            const newData = {
                UserID:asd['insertId'],
                CharacteristicID: charName['insertId'],
                valueChar: element['value']
            }
            await pool.query('INSERT INTO characteristicuser set ?',[newData]);

        }
    });

    // await pool.query('INSERT INTO users set ?',[data]);
    res.send(data);
});

router.get('/for/:param/:value', async (req, res) => {
    const param = req.params.param;
    const value = req.params.value;
    var data;
    switch(param){
        case ('username'):
            data = await pool.query('SELECT * FROM users WHERE username = "'+value+'"');
            break;
        case('user_url'):
            data = await pool.query('SELECT * FROM users WHERE user_url = '+'"'+value+'"');
            break;
        case ('id'):
            data = await pool.query('SELECT * FROM users WHERE id = '+value);
            break;
    }
    res.send(data);
});

router.delete('/:id', async (req, res) =>{
    const id = req.params.id;
    await pool.query('DELETE FROM users WHERE id = '+id);
    const data = await pool.query('select * from users');
    res.send(data);
});

module.exports = router;
