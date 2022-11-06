
const mongoose = require('mongoose')
const express = require('express');
const { saveIdea, getIdeaById, getAllIdeas } = require('../../controllers/IdeaController');
const router = express.Router();


router.post('', async (req, res) => {
    const { thumbnail, name, description, createdBy, city,
        country, relatedChallenges, relatedIdeas, tag }  = req.body

    try {
        const idea = await saveIdea(thumbnail, name, description, createdBy, city,
            country, relatedChallenges, relatedIdeas, tag)
        res.send(idea);
    } catch(error) {
        next(new Error("Error creating idea"));
    }
})

router.get('/:id', async (req, res) => {
    const ideaId = req.params.id
    const idea = await getIdeaById(ideaId);
    res.send(idea);
})

router.get('', async (_request, res) => {
    try {
        const ideas = await getAllIdeas();
        res.send(ideas);
    } catch(error) {
        next(new Error("Error fetching ideas"));
    }
} )

module.exports = router
