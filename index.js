const express = require('express');


const app = express();


app.use(express.static('public'));


app.get('/dinoname', (req, res) => {

    res.json({
        name:'Jesus',
        age:39
    });
    
});


app.listen(3000,()=>{
    console.log("Servidor en puerto 3000")
})

