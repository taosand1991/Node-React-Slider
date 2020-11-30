const express = require('express')
const route = express.Router()
const User = require('../../models/User')



route.post('/', async(req, res) => {
    try {
       const user = await User.findOne({emailAddress: req.body.emailAddress})
       if(user){
           console.log(user)
        if(user.firstName === req.body.firstName) return res.status(200).json({message:'login success'})
        return res.status(400).json({message:'Authentication failed'})
       }else{
        return res.status(400).json({message:'Authentication failed'}) 
       }
       
    } catch (e) {
        console.log(e)
    }
})

module.exports = route;