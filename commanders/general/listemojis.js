const Discord = require("discord.js");
const BaseCommand = require('../../BaseClasses/baseCommand');

module.exports = class listemojis extends BaseCommand {
    constructor(){
        super({
            aliases: ['emojis'],
            description: "Lists the sever's emojis.",
            name: 'listemojis',
            permissions: ['MANAGE_EMOJIS'],
            usage: '`+listemojis`',
            category: 'general'
        });
    }

    async run(client, message, args){
        if(message.member.permissions.has('ADMIN')){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setDescription('You have no cutom server emotes.')
        message.channel.send(newEmbed);
        try{
            const emojiList = message.guild.emojis.cache.map(e=>e.toString()).join(" ");
            message.channel.send(emojiList, {split: {char: ' ' }});
        } catch(err){
            message.channel.send(newEmbed);
        }
    }
    }
}