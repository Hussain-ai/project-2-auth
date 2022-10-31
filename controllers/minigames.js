const express = require('express')
const db = require('../models')
const router = express.Router()
const cryptojs = require('crypto-js')
require('dotenv').config()
const bcrypt = require('bcrypt')
const axios = require('axios')

router.get('/minigame1', (req, res)=>{
    try{ 
        res.render('minigame1/index')
    }
    catch(err){
        console.log('ERROOOR!')
    }
    })

router.get('/minigame2', (req, res)=>{
    try{ 
        res.render('minigame2/index')
    }
    catch(err){
        console.log('ERROOOR!')
    }
    })

module.exports = router