const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');
const Levels = require('discord-xp');

module.exports = class rank extends BaseCommand {
    constructor(){
        super({
            aliases: ['level'],
            description: "Displays user's current level",
            name: 'rank',
            permissions: ['SEND_MESSAGES'],
            usage: '`+rank`',
            category: 'general'
        });
    }

    async run(client, message, args){
        const target = message.mentions.members.first();
        if(target){
          const user = await Levels.fetch(target.id, message.guild.id);
          const newEmbedd = new Discord.MessageEmbed()
          .setColor('#FFB6C1')
          .setDescription(`<@${target.id}> You are currently level **${user.level}**`);
          message.channel.send(newEmbedd)
        } else {
        const user = await Levels.fetch(message.author.id, message.guild.id);
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setDescription(`${message.author} You are currently level **${user.level}**`);

        message.channel.send(newEmbed);
        }
    }
}