const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');

module.exports = class updateSettingsUno extends BaseCommand {
    constructor(){
        super({
            aliases: ['updateSettingsu'],
            description: "Updates your current uno settings.",
            name: 'updatesettingsuno',
            permissions: ['MANAGE_MESSAGES'],
            usage: '`+updatesettingsuno`',
            category: 'games'
        });
    }

    async run(client, message, args){
        client.discordUNO.updateSettings(message);
    }
}