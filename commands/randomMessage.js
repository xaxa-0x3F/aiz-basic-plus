const Discord = require('discord.js');
module.exports = {
    name: 'randommessage',
    description: 'Sends a random message!',
    execute(message){
        var rando = message.channel.guild.messages.cache.random();
        message.channel.send(`${rando}`);
    }
}