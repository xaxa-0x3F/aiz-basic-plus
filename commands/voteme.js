const Discord = require('discord.js');
module.exports = {
    name: 'voteme',
    description: "Upvote me on top.gg!",
    timeout: 15000,
    execute(message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setTitle('Thanks for considering voting!')
        .addFields(
            {name: 'Vote here: ', value: 'https://top.gg/bot/784994557489184779'}
        )
        .setThumbnail('https://img-9gag-fun.9cache.com/photo/aoNeYKA_460swp.webp')
        .setFooter('Voting supports the bot greatly.');

        message.channel.send(newEmbed);
        }
}