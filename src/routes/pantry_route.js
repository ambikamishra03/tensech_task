const express = require('express');
require('dotenv').config();

const router = new express.Router();
const Pantry  = require("../model/pantryy");
const id = process.env.PANTRY_ID;
const key=process.env.BASKET_KEY;

const url = 'https://getpantry.cloud/apiv1/pantry/${id}/basket/${key}'



// create user using async await
router.post(url,async(req,res) =>{
    try {
        const user = new Pantry(req.body);
        const result = await user.save();    
        res.status(201).send(result);
    } catch (error) {
                res.status(400).send(error);
    }
 })




 // read the data 
 router.get(url, async(req,res) =>{
    try {
      const pantryData = await Pantry.find();
      res.send(pantryData);
    } catch (error) {
        res.send(error);
    }
 })

 // for getting individual data
 router.get(url, async (req,res) =>{
    try {
        const _id = req.params.id;
        // console.log(_id);
        const pantryData = await Pantry.findById(_id);
        console.log(pantryData);
        if(!pantryData){
            return res.status(404).send();
        }else{
            res.send(pantryData);
        }

    } catch (error) {
        return res.status(500).send(error);
    }
 })

 // update students by its id
 router.patch(url, async (req,res) =>{
     try {
        const _id = req.params.id;
const updatePantry = await Pantry.findByIdAndUpdate(_id,req.body,{
    new : true
})
res.status(201).send(updatePantry);
     } catch (error) {
        return res.status(404).send(error);
    }
 })


//  delete request in rest-api 
 router.delete(url, async(req,res) =>{
  try {
    const delPantry = await Pantry.findByIdAndDelete(req.params.id);
    if(!req.params.id){
        return res.status(404).send();
    }
    res.send(delPantry);
  } catch (error) {
    res.status(500).send(error);
  }
 })

 
module.exports =router;