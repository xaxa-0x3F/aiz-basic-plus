const Discord = require('discord.js');
module.exports = {
    name: 'voteme',
    description: "Upvote me on top.gg!",
    timeout: 15000,
    execute(message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setTitle('Thanks for considering voting!')
        .setDescription('Mega PONG')
        .addFields(
            {name: 'Vote here: ', value: 'pong'}
        )
        .setThumbnail('https://i.pinimg.com/originals/a9/35/ed/a935eda9c595e37ed5d4e7f09b1543c9.gif')
        .setFooter('hehheheheheh<3');

        message.channel.send(newEmbed);
        }
}