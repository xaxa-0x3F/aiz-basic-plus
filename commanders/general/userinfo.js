const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');

module.exports = class userInfo extends BaseCommand {
    constructor(){
        super({
            aliases: ['uinfo', 'about'],
            description: 'Gives info about a user.',
            name: 'userinfo',
            permissions: ['SEND_MESSAGES'],
            usage: '`+userinfo <optional tag>`',
            category: 'general'
        });
    }

    async run(client, message, args, member){
        const target = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(target){
            const uuBed = new Discord.MessageEmbed()
            .setTitle("User Information")
            .setThumbnail(target.avatarURL)
            .addField('Name', `${target.displayName}`, true)
            .addField('Hash', `${target.user.tag}`, true)
            .addField('ID', `${target.user.id}`, true)
            .addField('Account Created', `${target.user.createdAt}`, true)
            .addField('Join Date', `${target.joinedAt}`, true)
            .setTimestamp()
            message.channel.send(uuBed);
        } else {
            const uBed = new Discord.MessageEmbed()
            .setTitle("User Information")
            .setThumbnail(message.author.avatarURL)
            .addField('Name', `${message.member.displayName}`, true)
            .addField('Hash', `${message.member.user.tag}`, true)
            .addField('ID', `${message.member.user.id}`, true)
            .addField('Account Created', `${message.member.user.createdAt}`, true)
            .addField('Join Date', `${message.member.joinedAt}`, true)
            .setTimestamp()
            message.channel.send(uBed);
        }
    }
}