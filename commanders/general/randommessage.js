const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');

module.exports = class rando extends BaseCommand {
    constructor(){
        super({
            aliases: ['randomMessage'],
            description: "Sends a random message from the current channel.",
            name: 'rando',
            permissions: ['SEND_MESSAGES'],
            usage: '`+rando`',
            category: 'general'
        });
    }

    async run(client, message, args){
        var rando = message.channel.messages.cache.random();
        message.channel.send(`${rando}`);
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setDescription(`${rando}`)
        message.channel.send(newEmbed);
    }
}