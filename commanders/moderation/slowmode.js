const BaseCommand = require('../../BaseClasses/baseCommand');
const usedCommand = new Set();
const Discord = require('discord.js');

module.exports = class slowmode extends BaseCommand {
    constructor(){
        super({
            aliases: ['slow', 'sm'],
            description: "Sets a channel's slow mode.",
            name: 'slowmode',
            permissions: ['SEND_MESSAGES'],
            usage: '`+slowmode <time in seconds>`',
            category: 'moderation'
        });
    }

    async run(client, message, args){
        const usedEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM').setDescription(`You're on cooldown for the command`);
        if(usedCommand.has(message.author.id)){
            message.channel.send(usedEmbed);
        } else {
            if(message.member.hasPermission('MANAGE_SERVER')){
            const donEmbed = new Discord.MessageEmbed()
            .setColor('#FFB6C1').setDescription(`Slowmode is now set to ${args[0]}`);

            message.channel.setRateLimitPerUser(args[0]);
            message.channel.send(donEmbed);

            usedCommand.add(message.author.id);
            setTimeout(() => {
                usedCommand.delete(message.author.id);
            }, 3000);
        } else if(!message.member.hasPermission('KICK_MEMBERS')){
            const noPermsEm = new Discord.MessageEmbed()
            .setColor('RANDOM').setDescription(`${message.author.tag} you are not allowed to use this command`);
            message.channel.send(noPermsEm);
        }
    }
    }
}