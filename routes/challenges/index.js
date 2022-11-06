
const mongoose = require('mongoose')
const express = require('express');
const router = express.Router();

const challengeConrtoller = require('../../controllers/ChallengeController');


router.post('', async (req, res) => {
    const { thumbnail, name, description, createdBy, city,
        country, relatedChallenges, relatedIdeas, tag }  = req.body

    try {
        const challenge = await challengeConrtoller.saveChallenge(thumbnail, name, description, createdBy, city,
            country, relatedChallenges, relatedIdeas, tag)
        res.send(challenge);
    } catch(error) {
        next(new Error("Error creating challenge"));
    }
})

router.get('/:id', async (req, res) => {
    const challengeid = req.params.id
    const challenge = await challengeConrtoller.getChallengeById(challengeid)
    res.send(challenge)
})

router.get('', async (_request, res) => {
    try {
        const challenges = await challengeConrtoller.getAllChallenge();
        res.send(challenges);
    } catch(error) {
        next(new Error("Error fetching challenges"));
    }
} )

module.exports = router
