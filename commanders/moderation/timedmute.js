const ms = require('ms');
const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');

module.exports = class timedmute extends BaseCommand {
    constructor(){
        super({
            aliases: ['tempmute'],
            description: "Mutes a user for a specified amount of time.",
            name: 'timedmute',
            permissions: ['MUTE_MEMBERS'],
            usage: '`+timedmute <user> <time(1s, 1m, 1d, 1w, 1y)>`',
            category: 'moderation'
        });
    }

    async run(client, message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setDescription(`https://docs.google.com/document/d/1Igd7EJ081EM_chhgX09-43dy5da27QNjm25yZeGjYNg/edit?usp=sharing`)
        message.channel.send(newEmbed);

        if(message.member.permissions.has("MUTE_MEMBERS")){
            const target = message.mentions.users.first();
            if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
            let memberTarget = message.guild.members.cache.get(target.id);

            if(memberTarget.permissions.has("MUTE_MEMBERS")){
                message.channel.send({embed: {
                    color: '#FFB6C1',
                    description: "You can't mute moderators"
                }});
            } else {
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            memberTarrget.send(`You have been muted for ${ms(ms(args[1]))}`);
            message.channel.send({embed: {
                color: '#FFB6C1',
                description: `<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}.`
            }});
            setTimeout(function(){
                memberTarget.roles.add(mainRole.id);
                memberTarget.roles.remove(muteRole.id);
                memberTarrget.send('You have been unmuted');
            }, ms(args[1]));
            }} else {
                message.channel.send({embed: {
                    color: '#FFB6C1',
                    description: `User not found.`
                }});
            }   
        } else{
            message.channel.send({embed: {
                color: '#FFB6C1',
                description: `You are not allowed to mute members.`
            }});
        } 
    }
}