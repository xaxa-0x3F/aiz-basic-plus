var Discord = require('discord.js');
module.exports = {
    name: 'recommend',
    description: 'Recommend a feature to the Codeasaurous Server.',
    execute(message, args){
        const channelToSend = message.guild.channels.cache.find(channel => channel.name === '👍-recommendations');
        const Author = message.author.tag;        ;
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setTitle(`${Author}'s Recommendation:`)
        .setDescription(args.slice(0).join(' '));

        const errorEmbed = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setDescription('You need to reccomend something.');
        if(message.length <= '0' || message == null || message == undefined){
            message.channel.send(errorEmbed);
        } else{
            channelToSend.send(newEmbed);
        }
    }
}