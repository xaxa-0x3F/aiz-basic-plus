const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');

module.exports = class reactionrole extends BaseCommand {
    constructor(){
        super({
            aliases: ['rr'],
            description: "Creates a new reaction role.",
            name: 'reactionrole',
            permissions: ['MANAGE_ROLES'],
            usage: '`+rr <channel> <role> <emoji> <message>`',
            category: 'moderation'
        });
    }

    async run(client, message, args){
        let channelToSend = message.guild.channels.cache.find(channel => channel.toString() === args[0]);
        let Role = message.guild.roles.cache.find(role => role.name === args[1]);
        
        let Emoji = message.guild.emojis.cache.get(emoji => emoji.toString() === args[2].name);
        channelToSend.send(args[3])
        let msg = await channelToSend.send(args[1])
        msg.react(args[2])
        console.log(Emoji);
        await messageEmbed.react(Emoji);
    }
}