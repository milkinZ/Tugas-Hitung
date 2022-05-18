const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.post('/bmi',(req,res)=>{
    var tinggi=req.body.tinggi / 100
    var berat=req.body.berat
    var hasil = berat / (tinggi * tinggi)
    var bmi= hasil.toFixed(1);
    var stat
    if(bmi < 18.5){
        stat="Kekurangan Berat Badan"     
    } else if(bmi >= 18.5 && bmi <= 24.9){
        stat="Ideal"
    } else if(bmi >= 25 && bmi <= 29.9){
        stat="Kelebihan Berat Badan"
    }else if(bmi>30){
        stat="Obesitas!!!"
    }
    return res.status(200).json({
        tinggi: tinggi,
        berat: berat,
        bmi: bmi,
        status: stat
    })
})
app.listen(port, () => {
    console.log(`Server di port ${port}`)
})