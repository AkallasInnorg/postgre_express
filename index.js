const express = require('express');
const app = express();
const port = 3000;
const db = require('./dbConnection');

app.listen(port, ()=>{
    console.log(`App running on port ${port}.`)
})

app.get('/get-data', async (req, res)=>{
    try{
        // const result = await db.query('SELECT * FROM "tableTest"');
        const result = await db.query('SELECT * FROM "task_view_temp"');
        res.json(result.rows);
        console.log(result.rows);
    } catch(e){
        console.error('Error executing query:', e);
        res.status(500).json({e: 'An error occured'});
    }
})

app.get('/get-task', async (req, res)=>{
    try{
        const result = await db.query('SELECT * FROM "task"');
        res.json(result.rows);
        console.log(result.rows);
    }catch(e){
        console.log('Error executing query:', e);
        res.status(500).json({e: 'An error occured'});
    }
})



