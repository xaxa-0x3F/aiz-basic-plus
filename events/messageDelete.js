const baseEvent = require("../BaseClasses/baseEvent");
const Discord = require('discord.js')

module.exports = class messageDelete extends baseEvent {
    constructor(){
        super('messageDelete');
    }

    async run(client, message){
    }
}