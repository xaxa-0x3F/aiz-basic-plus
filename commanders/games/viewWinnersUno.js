const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');

module.exports = class viewWinnersUno extends BaseCommand {
    constructor(){
        super({
            aliases: ['viewWinnersu'],
            description: "Displays winners of the uno game.",
            name: 'viewWinnersuno',
            permissions: ['SEND_MESSAGES'],
            usage: '`+viewwinnersuno`',
            category: 'games'
        });
    }

    async run(client, message, args){
        client.discordUNO.viewWinners(message);
    }
}