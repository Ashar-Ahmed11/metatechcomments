const express = require('express')
const router = express.Router()
const Comment = require('../models/Comment')


router.post('/postcomment', async (req, res) => {
    try {
        const duplicate = await Comment.findOne({ email: req.body.email })
        if (!duplicate) {
            const bodywebsite = req.body.website
            const includeshttps = bodywebsite.includes("https://")
            if (!includeshttps) {
                var thewebsite = `https://${req.body.website}`
            }
            else {
                var thewebsite = req.body.website
            }
            const comment = await Comment.create({ name: req.body.name, email: req.body.email, website: thewebsite, description: req.body.description })   
            res.send(comment)
        }
        else {
            res.send({ error: "Duplicate comment was found!" })
        }


    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some Internal Server Error")
    }
})

router.get('/getcomments', async (req, res) => {
    try {
        const allcomments = await Comment.find()
        res.send(allcomments)

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some Internal Server Error")
    }
})


module.exports = router