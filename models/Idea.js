const mongoose = require('mongoose')

const ideasSchema = mongoose.Schema({
    name: { type: String, required: true},
    description: {type: String, required: true},
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now},
    city: {type: String},
    country: {type: String},
    relatedChallenges: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Challenge'} ],
    relatedIdeas: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Idea'} ],
    tag: [{type: String}]
})

const Idea = mongoose.model("Idea", ideasSchema)
module.exports = Idea