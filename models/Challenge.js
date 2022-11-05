const mongoose = require('mongoose')


const challengeSchema = mongoose.Schema({
    id: { type: String, required: true, default: uuidv4()}, 
    name: { type: String, required: true},
    description: {type: String, required: true},
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    createdAt: { type: Date, default: Date.now()},
    city: {type: String}, 
    country: {type: String},
    relatedChallenges: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Challenge'} ]
})

const Challenge = mongoose.model("Challenge", challengeSchema)
module.exports = Challenge