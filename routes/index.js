const router = require('express').Router();
const fs = require("fs");

const db = require('../db/db.json');


router.get('/notes', (req, res) => {
    res.json(db)
});

router.get("/:id",(req,res)=>{
    for (let i = 0; i < db.length; i++) {
        if(db[i].id==req.params.id){
           return res.json(db[i])
        }   
    }
    res.status(404).send("no donut found")
})
router.post("/notes",(req,res)=>{
    console.log(req.body);
    db.push(req.body)
    fs.writeFileSync("./db/db.json",JSON.stringify(db, null, 4))
    console.log("done")
    res.json({message:"data recieved"})
     
})

module.exports = router;