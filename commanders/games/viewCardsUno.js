const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');

module.exports = class viewCardsUno extends BaseCommand {
    constructor(){
        super({
            aliases: ['viewcardsu'],
            description: "Displays your current cards.",
            name: 'viewcardsuno',
            permissions: ['SEND_MESSAGES'],
            usage: '`+viewcardsuno`',
            category: 'games'
        });
    }

    async run(client, message, args){
        client.discordUNO.viewCards(message);
    }
}