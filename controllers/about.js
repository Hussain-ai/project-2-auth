const express = require('express')
const db = require('../models')
const router = express.Router()
const axios = require('axios')


router.post('/:productId/new', async (req,res) => {
// Grab our pokemon
const book = await db.book.findByPk(req.params.productId)
// Create a comment
const [newComment, created] = await db.comment.findOrCreate({
    where: {
        description: req.body.description
    }
})
//Add our comment to the pokemon
await book.addComment(newComment)
await res.locals.user.addComment(newComment)
//redirect to pokemon details page
res.redirect(`/book/${req.params.bookId}`)
})



module.exports = router