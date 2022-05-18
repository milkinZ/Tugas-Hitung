const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.get('/konversi/desimal/:nilai',(req,res)=>{
    var desimal = parseInt(req.params.nilai)
    data_bil={
        biner: nilai.toString(2),
        oktal: nilai.toString(8),
        hexadesimal: nilai.toString(16)
    }
    return res.status(200).json({
        decimal: desimal,
        result: data_bil
    })
})

app.get('/konversi/biner/:nilai',(req,res)=>{
    var biner = parseInt(req.params.nilai)
    var desimal = parseInt(biner,2)
    data_bil={
        desimal : desimal,
        oktal : desimal.toString(8),
        hexadesimal : desimal.toString(16)
    }

    return res.status(200).json({
        biner: biner,
        result: data_bil
    })
})

app.get('/konversi/oktal/:nilai',(req,res)=>{
    var oktal = parseInt(req.params.nilai)
    var desimal = parseInt(oktal,8)
    data_bil={
        desimal : desimal,
        biner : desimal.toString(2),
        hexadesimal : desimal.toString(16)
    }

    return res.status(200).json({
        oktadesimal: oktal,
        result: data_bil
    })
})

app.get('/konversi/hexa/:nilai',(req,res)=>{
    var hexadesimal = parseInt(req.params.nilai)
    var desimal = parseInt(hexadesimal,16)
    data_bil={
        desimal : desimal,
        biner : desimal.toString(2),
        oktal : desimal.toString(8)
    }

    return res.status(200).json({
        hexadesimal: hexadesimal,
        result: data_bil
    })
})

app.listen(port, () => {
    console.log(`Server di port ${port}`)
})