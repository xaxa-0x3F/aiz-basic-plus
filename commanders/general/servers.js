const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');

module.exports = class servers extends BaseCommand {
    constructor(){
        super({
            aliases: ['size'],
            description: "Displays how many servers I am currently in.",
            name: 'servers',
            permissions: ['SEND_MESSAGES'],
            usage: '`+servers`',
            category: 'general'
        });
    }

    async run(client, message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setDescription(`I'm in ${client.guilds.cache.size} servers!`);

        message.channel.send(newEmbed);
    }
}