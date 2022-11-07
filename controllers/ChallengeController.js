const Challenge = require('../models/Challenge')

async function saveChallenge(thumnail, name, description, createdBy, city, 
    country, relatedChallenges, relatedIdeas, tag) {
    const challenge = Challenge({thumnail, name, description, createdBy, city, 
        country, relatedChallenges, relatedIdeas, tag})
    await challenge.save()
}

async function getAllChallenge() {
    return await Challenge.find({})
}

async function getChallengeById(id) {
    return await Challenge.find({_id: id})
}


async function getChallengeByCity(city){
    return await Challenge.find({city:city})
}

// further customise as per the needs.
module.exports = {saveChallenge, getAllChallenge, getChallengeById, getChallengeByCity}