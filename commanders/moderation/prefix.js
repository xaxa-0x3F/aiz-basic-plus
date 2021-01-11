const db = require('quick.db');
const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');

module.exports = class prefix extends BaseCommand {
    constructor(){
        super({
            aliases: ['pre'],
            description: "Change my prefix!",
            name: 'prefix',
            permissions: ['MANAGE_CHANNELS'],
            usage: '`+prefix <prefix>`',
            category: 'moderation'
        });
    }

    async run(client, message, args){
        if(message.member.permissions.has("ADMINISTRATOR")){
            if(args[0]===null || args[0]===undefined){
                const newEmbedd = new Discord.MessageEmbed()
                .setColor('#FFB6C1')
                .setDescription(`You need to define the prefix ❤`)

                message.reply(newEmbedd);
            } else{
            db.set(`${message.guild.id}prefix`, args[0])
            const newEmbeddd = new Discord.MessageEmbed()
            .setColor('#FFB6C1')
            .setDescription('My prefix is now `' + args[0] + '`    👏 👏 👏')

            return message.reply(newEmbeddd) 
            }
            } else {
                const newEmbed = new Discord.MessageEmbed()
                .setColor('#FFB6C1')
                .setDescription(`You must be an admin to change the prefix 😢`)

                message.channel.send(newEmbed);
        }
    }
}