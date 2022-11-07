const Idea = require('../models/Idea');

async function saveIdea(name, description, createdBy, city,
    country, relatedChallenges, relatedIdeas, tag) {
    const idea = Idea({name, description, createdBy, city,
        country, relatedChallenges, relatedIdeas, tag})
    await idea.save()
    return idea;
}

async function getAllIdeas() {
    return await Idea.find({}).sort({ createdAt: -1 });
}

async function getIdeaById(id) {
    return await Idea.findOne({_id: id})
}

// further customise as per the needs
module.exports = { saveIdea, getAllIdeas, getIdeaById }