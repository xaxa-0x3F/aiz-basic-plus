const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');

module.exports = class leaveUno extends BaseCommand {
    constructor(){
        super({
            aliases: ['lu'],
            description: "Removes you from the current Uno game.",
            name: 'leaveuno',
            permissions: ['SEND_MESSAGES'],
            usage: '`+leaveuno`',
            category: 'games'
        });
    }

    async run(client, message, args){
        client.discordUNO.removeUser(message);
    }
}