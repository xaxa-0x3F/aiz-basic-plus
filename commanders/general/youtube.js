const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');

module.exports = class youtube extends BaseCommand {
    constructor(){
        super({
            aliases: ['yt'],
            description: "Sends my creator's youtube channel.",
            name: 'youtube',
            permissions: ['SEND_MESSAGES'],
            usage: '`+youtube`',
            category: 'general'
        });
    }

    async run(client, message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setDescription(`https://www.youtube.com/channel/UC7Rlc68ImIV32Y95xLmTSpA?view_as=subscriber`)
        message.channel.send(newEmbed);
    }
}
