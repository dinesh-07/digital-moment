const Idea = require('../models/Idea');

async function saveIdea(thumbnail, name, description, createdBy, city,
    country, relatedChallenges, relatedIdeas, tag) {
    const idea = Idea({thumbnail, name, description, createdBy, city,
        country, relatedChallenges, relatedIdeas, tag})
    await idea.save()
    return idea;
}

async function getAllIdeas() {
    return await Idea.find({})
}

async function getIdeaById(id) {
    return await Idea.find({_id: id})
}

// further customise as per the needs
module.exports = { saveIdea, getAllIdeas, getIdeaById}