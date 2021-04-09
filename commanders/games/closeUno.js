const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');

module.exports = class closeUno extends BaseCommand {
    constructor(){
        super({
            aliases: ['closeu'],
            description: "Closes the current Uno game.",
            name: 'closeuno',
            permissions: ['SEND_MESSAGES'],
            usage: '`+closeuno`',
            category: 'games'
        });
    }

    async run(client, message, args){
        client.discordUNO.closeGame(message);
    }
}