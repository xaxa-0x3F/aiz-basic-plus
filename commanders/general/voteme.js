const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');

module.exports = class voteme extends BaseCommand {
    constructor(){
        super({
            aliases: ['vote'],
            description: "Vote for me on https://top.gg",
            name: 'voteme',
            permissions: ['SEND_MESSAGES'],
            usage: '`+voteme`',
            category: 'general'
        });
    }

    async run(client, message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setTitle('Thanks for considering voting!')
        .addFields(
            {name: 'Vote here: ', value: 'https://top.gg/bot/784994557489184779/vote'}
        )
        .setThumbnail('https://img-9gag-fun.9cache.com/photo/aoNeYKA_460swp.webp')
        .setFooter('Voting supports the bot greatly.');

        message.channel.send(newEmbed);
        }
}