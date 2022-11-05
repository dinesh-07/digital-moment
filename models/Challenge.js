const mongoose = require('mongoose')

<<<<<<< HEAD
const challengeSchema = mongoose.Schema({
    thumnail: {type: String, required: false},
    name: { type: String, required: true},
    description: {type: String, required: true},
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now()},
    city: {type: String}, 
    country: {type: String},
    relatedChallenges: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Challenge'} ],
    relatedIdeas: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Idea'} ],
    tag: [{type: String}]
=======

const challengeSchema = mongoose.Schema({
    id: { type: String, required: true, default: uuidv4()}, 
    name: { type: String, required: true},
    description: {type: String, required: true},
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    createdAt: { type: Date, default: Date.now()},
    city: {type: String}, 
    country: {type: String},
    relatedChallenges: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Challenge'} ]
>>>>>>> e454c22 (challenges schema modified)
})

const Challenge = mongoose.model("Challenge", challengeSchema)
module.exports = Challenge