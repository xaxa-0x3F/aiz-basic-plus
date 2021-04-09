const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');

module.exports = class viewTableUno extends BaseCommand {
    constructor(){
        super({
            aliases: ['viewtableu'],
            description: "Displays the current uno table.",
            name: 'viewtableuno',
            permissions: ['SEND_MESSAGES'],
            usage: '`+viewtableuno`',
            category: 'games'
        });
    }

    async run(client, message, args){
        client.discordUNO.viewTable(message);
    }
}