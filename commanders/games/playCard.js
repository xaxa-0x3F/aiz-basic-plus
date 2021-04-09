const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');

module.exports = class playCard extends BaseCommand {
    constructor(){
        super({
            aliases: ['pc'],
            description: "Plays a card in the current uno game.",
            name: 'playcard',
            permissions: ['SEND_MESSAGES'],
            usage: '`+playcard <card>`',
            category: 'games'
        });
    }

    async run(client, message, args){
        client.discordUNO.playCard(message);
    }
}