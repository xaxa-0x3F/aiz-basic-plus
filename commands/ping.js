const Discord = require('discord.js');
module.exports = {
    name: 'ping',
    description: "PONG PONG PONG ",
    timeout: 15000,
    execute(message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setTitle('PONG!')
        .setDescription('Mega PONG')
        .addFields(
            {name: 'pong', value: 'pong'}
        )
        .setThumbnail('https://thumbs.gfycat.com/DaringDimwittedFlyingsquirrel-max-1mb.gif')
        .setFooter('hehheheheheh<3');

        message.channel.send(newEmbed);
        }
}