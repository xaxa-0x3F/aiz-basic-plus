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
        const user = await Levels.fetch(message.author.id, message.guild.id);
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setDescription(`${message.author} You are currently level **${user.level}**`);

        message.channel.send(newEmbed);
    }
}