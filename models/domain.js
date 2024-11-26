const mongoose = require('mongoose');

const DomainSchema = new mongoose.Schema({
    domainName: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Domain',DomainSchema);
