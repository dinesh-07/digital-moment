
const mongoose = require('mongoose')
const express = require('express');
const router = express.Router();

const challengeConrtoller = require('../../controllers/ChallengeController');


router.post('/register-challenge', async (req, res) => {
    const {thumnail, name, description, createdBy, city, 
        country, relatedChallenges, relatedIdeas, tag}  = req.body

    try {
        const challenge = await challengeConrtoller.saveChallenge(thumnail, name, description, createdBy, city, 
            country, relatedChallenges, relatedIdeas, tag)
        res.send({message: "Challenge has been registered to the system", challenge: challenge})
    } catch(error) {
        res.send({
            message: "Error saving the challenge to the system", 
            error: error
        })
    }
})

// inconsistent error handling
router.get('/get-challenge/:id', async (req, res) => {
    const challengeid = req.params.id
    const challenge = await challengeConrtoller.getChallengeById(challengeid)
    res.send(challenge)
})

// filter challenge by city
router.get('/filter-challenge/:city', async (req, res) => {
    const challengecity = req.params.city
    const challenge = await challengeConrtoller.getChallengeByCity(challengecity)
    res.send(challenge)
})

router.get('/get-challenges', async (_request, res) => {
    try {
        const challenges = await challengeConrtoller
        .getAllChallenge()
        res.send(challenges)
    } catch(error) {
        res.send({
            message: "Error fetching challenge from system", 
            error: error
        })
    }
} )

module.exports = router

