var Discord = require('discord.js');
module.exports = {
    name: 'recommend',
    description: 'Recommend a feature to the Codeasaurous Server.',
    cooldown: 43200,
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

        const sentEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription('Recommendation sent! \nStay tuned for an anime/gaming version of this commands!');
        /*if (timestamps.has(message.author.id)) {
            const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
        
            if (now < expirationTime) {
                const timeLeft = (expirationTime - now) / 1000;
                return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
            }
        }*/
        if(message.length <= '0' || message == null || message == undefined){
            message.channel.send(errorEmbed);
        } else{
            channelToSend.send(newEmbed);
            message.channel.send(sentEmbed);
        }
    }
}