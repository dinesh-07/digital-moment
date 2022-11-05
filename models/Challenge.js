const mongoose = require('mongoose')

<<<<<<< HEAD
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

=======
>>>>>>> dad2532 (modified idea schema)
const challengeSchema = mongoose.Schema({
    id: { type: String, required: true, default: uuidv4()}, 
    thumnail: {type: String, required: false},
    name: { type: String, required: true},
    description: {type: String, required: true},
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now()},
    city: {type: String}, 
    country: {type: String},
<<<<<<< HEAD
    relatedChallenges: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Challenge'} ]
>>>>>>> e454c22 (challenges schema modified)
=======
    relatedChallenges: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Challenge'} ],
    relatedIdeas: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Idea'} ]
>>>>>>> dad2532 (modified idea schema)
})

const Challenge = mongoose.model("Challenge", challengeSchema)
module.exports = Challenge