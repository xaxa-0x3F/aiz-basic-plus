const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');

module.exports = class endUno extends BaseCommand {
    constructor(){
        super({
            aliases: ['endu'],
            description: "Ends the current Uno game.",
            name: 'enduno',
            permissions: ['SEND_MESSAGES'],
            usage: '`+enduno`',
            category: 'games'
        });
    }

    async run(client, message, args){
        client.discordUNO.endGame(message);
    }
}