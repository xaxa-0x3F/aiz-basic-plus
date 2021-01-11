const db = require('quick.db');
const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');

module.exports = class reacton extends BaseCommand {
    constructor(){
        super({
            aliases: ['onreact'],
            description: "Turn reactions to certain phrases on.",
            name: 'reacton',
            permissions: ['ADMINISTRATOR'],
            usage: '`+reacton`',
            category: 'moderation'
        });
    }

    async run(client, message, args){
        if(message.member.permissions.has("ADMINISTRATOR")){
            db.set(`${message.guild.id}reactionz`, 'on');
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#FFB6C1').setDescription('Reactions turned on');
            message.channel.send(newEmbed);
        }
        else {
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#FFB6C1').setDescription('You must be an admin to turn on reactions 😢');
            message.channel.send(newEmbed);
        }
    }
}