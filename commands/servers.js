const Discord = require('discord.js');
module.exports = {
    name: 'servers',
    description: "Displays how many servers I am currently in.",
    timeout: 15000,
    execute(message, client, args){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setDescription(`I'm in ${client.guilds.cache.size} servers!`);

        message.channel.send(newEmbed);
    }
}