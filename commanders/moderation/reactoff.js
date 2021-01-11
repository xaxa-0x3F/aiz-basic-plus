const db = require('quick.db');
const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');

module.exports = class reactoff extends BaseCommand {
    constructor(){
        super({
            aliases: ['noreact'],
            description: "Turns off reactions to messages with certain phrases.",
            name: 'reactoff',
            permissions: ['ADMINISTRATOR'],
            usage: '`+reactoff`',
            category: 'moderation'
        });
    }

    async run(client, message, args){
        if(message.member.permissions.has("ADMINISTRATOR")){
            db.set(`${message.guild.id}reactionz`, 'off');

            const newEmbed = new Discord.MessageEmbed()
            .setColor('#FFB6C1').setDescription('Reactions turned off');
            message.channel.send(newEmbed);
        }
        else {
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#FFB6C1').setDescription('You must be an admin to turn off reactions 😢');
            message.channel.send(newEmbed);
        }
    }
}