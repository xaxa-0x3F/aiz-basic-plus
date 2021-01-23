const BaseCommand = require('../../BaseClasses/baseCommand');
const usedCommand = new Set();
const Discord = require('discord.js');

module.exports = class pfp extends BaseCommand {
    constructor(){
        super({
            aliases: ['avatar', 'av', 'profilepic'],
            description: "Displays a your profile picture",
            name: 'pfp',
            permissions: ['SEND_MESSAGES'],
            usage: '`+pfp <optional user>`',
            category: 'general'
        });
    }

    async run(client, message, args){
        const usedEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM').setDescription(`You're on cooldown for the command`);
        if(usedCommand.has(message.author.id)){
            message.channel.send(usedEmbed);
        } else {
            let target = message.mentions.members.first(); 
            message.channel.send(message.author.displayAvatarURL());

            if(target) message.channel.send(target.displayAvatarURL());

            usedCommand.add(message.author.id);
            setTimeout(() => {
                usedCommand.delete(message.author.id);
            }, 3000);
        }
    }
}