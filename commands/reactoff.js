const db = require('quick.db');
const Discord = require('discord.js');
module.exports = {
    name: 'reactoff',
    description: 'turn reactions on or off',
    execute(message, args){
        if(message.member.permissions.has("ADMINISTRATOR")){
            db.set(`${message.guild.id}reactionz`, 'off');
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#FFB6C1').setDescription('Reactions turned off');
            message.channel.send(newEmbed);
        }
        else {
            message.channel.send('You must be an admin to turn off reactions 😢');
        }
    }
}