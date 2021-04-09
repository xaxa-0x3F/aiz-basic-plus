const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');

module.exports = class uno extends BaseCommand {
    constructor(){
        super({
            aliases: ['u'],
            description: "Calls or protects from uno during current game.",
            name: 'uno',
            permissions: ['SEND_MESSAGES'],
            usage: '`+uno`',
            category: 'games'
        });
    }

    async run(client, message, args){
        client.discordUNO.uno(message);
    }
}