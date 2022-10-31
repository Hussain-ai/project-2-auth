const express = require('express')
const router = express.Router()
const cryptojs = require('crypto-js')
require('dotenv').config()
const bcrypt = require('bcrypt')

const Sequelize = require("sequelize");
const db = require('./models')
db.product.bulkCreate(
    [
        {
            "id": 1,
            "bookName": "Maze Runner",
            "bookAuthor":"James Dashner",
            "bookImage": "https://i.imgur.com/uTy5W0d.jpg",
            "bookDescription": " The story is set in a distant future, where a group of teens are mysteriously teleported into a giant, stone maze. Not only has their memory been cleared, but they also have no indication as to why they have ended up in this position and what means they must take to escape.",
            "bookGenre": "Scifi",
            "bookPrice": 15.99,
            "bookStock": 21           
         },
            {
            "id": 2,
            "bookName": "fahrenheit 451",
            "bookAuthor":"Ray Bradbury",
            "bookImage": "https://i.imgur.com/UmV7eHC.jpg",
            "bookDescription": "Fahrenheit 451 is a 1953 dystopian novel by American writer Ray Bradbury. Often regarded as one of his best works, Fahrenheit 451 presents an American society where books have been outlawed and firemen burn any that are found.",
            "bookGenre": "Dystopian Fiction",
            "bookPrice": 14.99,
            "bookStock": 28
            },
            {
            "id": 3,   
            "bookName": "The Hobbit",
            "bookAuthor":"J.R.R Tolkien",
            "bookImage": "https://i.imgur.com/NxsmX8I.jpg",
            "bookDescription": "The Hobbit is set within Tolkien's fictional universe and follows the quest of home-loving Bilbo Baggins, the titular hobbit, to win a share of the treasure guarded by a dragon named Smaug. Bilbo's journey takes him from his light-hearted, rural surroundings into more sinister territory.",
            "bookGenre": "fantasy",
            "bookPrice": 22.99,
            "bookStock": 21   
                     },
            {
            "id": 4,
            "bookName": "The Great Gatsby",
            "bookAuthor":"F.Scot Fitzgerald",
            "bookDescription": "he Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
            "bookGenre": "Novel, Fiction, Tragedy",
            "bookImage": "https://i.imgur.com/ArdyqHl.jpg",
            "bookPrice": 18.99,
            "bookStock": 11                   },
            {
            "id": 5,
            "bookName": "To the Lighthouse",
            "bookAuthor":"Virginai Wolf",
            "bookDescription": "To the Lighthouse is a 1927 novel by Virginia Woolf. The novel centres on the Ramsay family and their visits to the Isle of Skye in Scotland between 1910 and 1920.",
            "bookGenre": "Novel, Fiction",
            "bookImage": "https://i.imgur.com/VPCDBNL.jpg",
            "bookPrice": 12.99,
            "bookStock": 8                    },
            {
            "id": 6,
            "bookName": "The Expanse Series",
            "bookAuthor": "James Corey", 
            "bookDescription": "The Expanse is a series of science fiction novels by James S. A. Corey, the joint pen name of authors Daniel Abraham and Ty Franck. The first novel, Leviathan Wakes, was nominated for the Hugo Award for Best Novel in 2012. The complete series was nominated for the Hugo Award for Best Series in 2017",
            "bookGenre": "Novel, Scifi",
            "bookImage": "https://i.imgur.com/bLrU3JX.jpg",
            "bookPrice": 59.99,
            "bookStock": 5                    }          
    ],
   
  ).then(() => console.log("Users data have been saved"));