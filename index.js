const express = require("express");
const app = express();
const request = require('then-jsonp')
const cors = require('cors');
const bodyParser = require('body-parser'); 

require('dotenv').config();

app.use(cors());
app.use(bodyParser.json({ extended: false }));

app.post("/", (req, res) =>{  
    let key = process.env.PET_API_KEY;
    let url = req.body.petUrl + "&key=" + key;
    let result = request("GET", url);
    result.done(function(resp){
        res.send(resp);
    }); 
 
});

app.listen(9000, () => {
    console.log("Server started")
})