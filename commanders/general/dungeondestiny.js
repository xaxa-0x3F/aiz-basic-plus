const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');

module.exports = class dungeondestiny extends BaseCommand {
    constructor(){
        super({
            aliases: ['dd'],
            description: "Sends a link to a game my creator made.",
            name: 'dungeondestiny',
            permissions: ['SEND_MESSAGES'],
            usage: '`+dungeondestiny`',
            category: 'general'
        });
    }

    async run(client, message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setDescription('Play Dungoen Destiny HERE~>\nhttps://studio.code.org/projects/applab/kY_JG4cwi6_0_9q_sPAddw')
        message.channel.send(newEmbed);
    }
}