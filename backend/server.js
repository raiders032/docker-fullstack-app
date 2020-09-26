const express = require("express")
const bodyParser = require("body-parser")
const db = require("./db")

const app = express();

app.use(bodyParser.json());

app.get(`/api/values`,(req, res)=>{
    db.pool.query(`SELECT * FROM lists;`,
    (err, results, fileds)=>){
        if(err)
            return res.status(500).send(err)
        else
            return res.json(results)
    }
})

app.post(`/api/value`, (req, res)=>{
    db.pool.query(`INSERT INTO lists (value) VALUSE(${req.body.value})`,
    (err, results, filedss) =>{
        if(err)
            return res.status(500).send(err)
        else
            return res.json({success:true, value: req.body.value})
    })
})

app.listen(5000 ,() =>{
    console.log(`server is listening on port 5000`)
}