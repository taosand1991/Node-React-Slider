const express = require('express')
const route = express.Router()
const User = require('../../models/User')


route.post('/create-user', async(req, res) => {
    try {
        const user = await User.findOne({emailAddress:req.body.emailAddress})
        if(user) return res.status(400).json({message:'Email Address already registered'})
        await User.create(req.body)
        return res.status(201).json({message:'user created successfully'})
    } catch (e) {
            console.log(e.message)
    }
})


module.exports = route;