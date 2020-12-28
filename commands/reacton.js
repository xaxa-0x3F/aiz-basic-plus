const db = require('quick.db');
const Discord = require('discord.js');
module.exports = {
    name: 'reacton',
    description: 'turn reactions on or off',
    execute(message, args){
        if(message.member.permissions.has("ADMINISTRATOR")){
            db.set(`${message.guild.id}reactionz`, 'on');
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#FFB6C1').setDescription('Reactions turned on');
            message.channel.send(newEmbed);
        }
        else {
            message.channel.send('You must be an admin to turn on reactions 😢');
        }
    }
}