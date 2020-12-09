const Discord = require('discord.js');
const Discord = require('discord.js');
module.exports = {
    name: 'inviteme',
    description: "How to invite.",
    execute(message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setTitle('PONG!')
        .setDescription('Mega PONG')
        .addFields(
            {name: 'pong', value: 'pong'}
        )
        .setImage('https://thumbs.gfycat.com/DaringDimwittedFlyingsquirrel-max-1mb.gif')
        .setFooter('hehheheheheh<3');

        message.channel.send(newEmbed);
        }
}