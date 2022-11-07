const Challenge = require('../models/Challenge')

async function saveChallenge(name, description, createdBy, city,
    country, relatedChallenges, relatedIdeas, tag) {
    const challenge = Challenge({name, description, createdBy, city,
        country, relatedChallenges, relatedIdeas, tag});
    await challenge.save()
    return challenge;
}

async function getAllChallenges() {
    return await Challenge.find({}).sort({ createdAt: -1 });
}

async function getChallengeById(id) {
    return await Challenge.findOne({_id: id})
}

// further customise as per the needs.
module.exports = { saveChallenge, getAllChallenges, getChallengeById }