const Discord = require('discord.js');
const BaseCommand = require('../../BaseClasses/baseCommand');

module.exports = class ban extends BaseCommand {
    constructor(){
        super({
            aliases: ['bann'],
            description: "Bans a user.",
            name: 'ban',
            permissions: ['BAN_MEMBERS'],
            usage: '`+ban <user> <optional reason>`',
            category: 'moderation'
        });
    }

    async run(client, message, args){
        if(message.member.permissions.has('BAN_MEMBERS')){
            const memberr = message.mentions.members.first();
            if(memberr.bannable == false){
                const newEmbed = new Discord.MessageEmbed()
                .setColor('#FFB6C1')
                .setDescription(`You cannot ban ${memberr}, sorry!`)
                message.channel.send(newEmbed).then(msg => { msg.delete({ timeout: 3000 })}).catch(console.error);
            }
            if(memberr.bannable == true){
                const memberTarget = message.guild.members.cache.get(memberr.id);
                const reasonn = args.slice(1).join(' ');
                if(reasonn===undefined||reasonn===null) reasonn = 'No reason';
                memberTarget.send(`You have been banned from ${message.guild.name} \n Reason: ${reasonn}`);
                memberTarget.ban({reason: reasonn});
                const newEmbed = new Discord.MessageEmbed()
                .setColor('#FFB6C1')
                .setDescription(`${memberr} was banned\nReason: ${reasonn}`)
                message.channel.send(newEmbed).then(msg => { msg.delete({ timeout: 3000 })}).catch(console.error);
            } else{
                const newEmbed = new Discord.MessageEmbed()
                .setColor('#FFB6C1')
                .setDescription(`User not found/mentioned.`)
                message.channel.send(newEmbed).then(msg => { msg.delete({ timeout: 3000 })}).catch(console.error);
            }
         } else {
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#FFB6C1')
            .setDescription(`You cannot ban members.`)
            message.channel.send(newEmbed).then(msg => { msg.delete({ timeout: 3000 })}).catch(console.error);
        }
    }
}