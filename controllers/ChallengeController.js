const Challenge = require('../models/Challenge')

async function saveChallenge(thumbnail, name, description, createdBy, city,
    country, relatedChallenges, relatedIdeas, tag) {
    const challenge = Challenge({thumbnail, name, description, createdBy, city,
        country, relatedChallenges, relatedIdeas, tag})
    await challenge.save()
    return challenge;
}

async function getAllChallenge() {
    return await Challenge.find({})
}

async function getChallengeById(id) {
    return await Challenge.find({_id: id})
}

// further customise as per the needs.
module.exports = {saveChallenge, getAllChallenge, getChallengeById}