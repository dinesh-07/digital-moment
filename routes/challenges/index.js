
const mongoose = require('mongoose')
const express = require('express');
const router = express.Router();

const { saveChallenge, getChallengeById, getAllChallenges } = require('../../controllers/ChallengeController');


router.post('', async (req, res, next) => {
    const { name, description, createdBy, city,
        country, relatedChallenges, relatedIdeas, tag }  = req.body

    try {
        const challenge = await saveChallenge(name, description, createdBy, city,
            country, relatedChallenges, relatedIdeas, tag)
        res.send(challenge);
    } catch(error) {
        next(new Error("Error creating challenge"));
    }
})

router.get('/:id', async (req, res) => {
    const challengeId = req.params.id
    const challenge = await getChallengeById(challengeId)
    res.send(challenge)
})

router.get('', async (_request, res) => {
    try {
        const challenges = await getAllChallenges();
        res.send(challenges);
    } catch(error) {
        next(new Error("Error fetching challenges"));
    }
} )

module.exports = router
