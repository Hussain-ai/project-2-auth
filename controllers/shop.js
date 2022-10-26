const express = require('express')
const db = require('../models')
const router = express.Router()
const cryptojs = require('crypto-js')
require('dotenv').config()
const bcrypt = require('bcrypt')



router.get('/products', async(req,res) =>{
// get from database
try{

    let products = await db.product.findAll()
res.render('shop/products.ejs', {products:products})
}

catch(err){
    console.log('ERROOOR!')
}
})



///-------------------////



router.get('/cart', async(req,res) =>{
    // get from database
    try{
        let products = await db.product.findAll() 
    res.render('shop/cart.ejs', {products:products})
    }
    catch(err){
        console.log('ERROOOR!')
    }
    })

module.exports = router