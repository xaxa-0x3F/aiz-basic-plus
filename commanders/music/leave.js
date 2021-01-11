const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');

module.exports = class leave extends BaseCommand {
    constructor(){
        super({
            aliases: ['exit', 'quit'],
            description: "Stops the current track",
            name: 'leave',
            permissions: ['SEND_MESSAGES'],
            usage: '`+leave`',
            category: 'music'
        });
    }

    async run(client, message, args){
        const voiceChannel = message.member.voice.channel;
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setDescription(`Leaving the voice channel ❤`);

        const newEmbedd = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setDescription(`You need to be in a voice channel to stop the music ❤`);

        if(!voiceChannel) return message.channel.send(newEmbedd);
        await voiceChannel.leave();
        await message.channel.send(newEmbed);
    }
}