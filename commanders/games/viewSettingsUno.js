const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');

module.exports = class viewSettingsUno extends BaseCommand {
    constructor(){
        super({
            aliases: ['viewsettingsu'],
            description: "Displays current uno settings.",
            name: 'viewsettingsuno',
            permissions: ['SEND_MESSAGES'],
            usage: '`+viewsettingsuno`',
            category: 'games'
        });
    }

    async run(client, message, args){
        client.discordUNO.viewSettings(message);
    }
}