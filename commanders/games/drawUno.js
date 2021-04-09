const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');

module.exports = class drawUno extends BaseCommand {
    constructor(){
        super({
            aliases: ['drawcard'],
            description: "Adds a card to the user in the current Uno game.",
            name: 'drawuno',
            permissions: ['SEND_MESSAGES'],
            usage: '`+drawuno`',
            category: 'games'
        });
    }

    async run(client, message, args){
        client.discordUNO.draw(message);
    }
}