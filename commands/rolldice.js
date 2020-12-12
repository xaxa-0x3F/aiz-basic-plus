const Discord = require('discord.js');
module.exports = {
    name: 'rolldice',
    description: "this is a command that rolls a die and outputs the number.",
    execute(message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription('The dice rolled a ' + '`' + Math.floor((Math.random() * 6) + 1) + '`')

        message.channel.send(newEmbed);
        }
}
