const express = require('express') //import express
const bodyParser = require('body-parser')
const app = express() //deklarasi variabel express
const port = 8080 //deklarasi port

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.get('/convert/celcius/:nilai', (req,res)=>{
        var nilai = req.params.nilai
        data_suhu={
            fahrenheit : Math.round(nilai * 1.8 + 32),
            reamur : Math.round(nilai * 0.8),
            kelvin : Math.round(nilai * 1 + 273.15)
        }
        return res.status(200).json({
            celcius : nilai,
            result : data_suhu
        })
        
})
app.get('/convert/kelvin/:nilai', (req,res)=>{
    var nilai = req.params.nilai
    data_suhu={
        fahrenheit : Math.round(nilai * 1.8 - 459.67),
        reamur : Math.round((nilai - 273.15) * 0.8),
        celcius : Math.round(nilai * 1 - 273.15)
    }
    return res.status(200).json({
        kelvin : nilai,
        result : data_suhu
    })
    
})
app.get('/convert/fahrenheit/:nilai', (req,res)=>{
    var nilai = req.params.nilai
    data_suhu={
        kelvin : Math.round((nilai * 1 + 459.67) / 1.8),
        reamur : Math.round((nilai - 32) / 2.25),
        celcius : Math.round((nilai - 32) / 1.8)
    }
    return res.status(200).json({
        fahrenheit : nilai,
        result : data_suhu
    })
    
})
app.get('/convert/reamur/:nilai', (req,res)=>{
    var nilai = req.params.nilai
    data_suhu={
        kelvin : Math.round(nilai / 0.8 + 273.15),
        fahrenheit : Math.round(nilai * 2.25 + 32),
        celcius : Math.round(nilai / 0.8)
    }
    return res.status(200).json({
        reamur : nilai,
        result : data_suhu
    })
    
})
app.listen(port, () => {
console.log(`Server di port ${port}`)
})