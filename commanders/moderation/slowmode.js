const BaseCommand = require('../../BaseClasses/baseCommand');
const usedCommand = new Set();
const Discord = require('discord.js');

module.exports = class slowmode extends BaseCommand {
    constructor(){
        super({
            aliases: ['slow', 'sm'],
            description: "Sets a channel's slow mode.",
            name: 'slowmode',
            permissions: ['SEND_MESSAGES'],
            usage: '`+slowmode <time in seconds>`',
            category: 'moderation'
        });
    }

    async run(client, message, args){
        
        
    }
}