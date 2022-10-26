const express = require('express')
const db = require('../models')
const router = express.Router()
const cryptojs = require('crypto-js')
require('dotenv').config()
const bcrypt = require('bcrypt')



router.get('/products', async(req,res) =>{
// get from database
 let products = await db.product.findAll()


    res.render('shop/products.ejs', {products:products})
})

module.exports = router