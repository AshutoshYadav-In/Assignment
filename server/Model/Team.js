const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
    teamName:{
        type:String,
        required:true
    },
    members:[{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

// Create the team model
module.exports = mongoose.model('Team', TeamSchema);