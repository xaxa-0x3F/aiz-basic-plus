const {Schema, model} = require('mongoose');

const Guild = new Schema({
    guildId: {type: String, require: true},
    mutedUsers: {type: Array, require: false, default: []},
    muteRole: {type: String, require: false, default: ""},
});

module.exports = model("guilds", Guild);