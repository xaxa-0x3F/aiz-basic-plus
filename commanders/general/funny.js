const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');

module.exports = class funny extends BaseCommand {
    constructor(){
        super({
            aliases: ['fun', 'rr'],
            description: "Funny in the voice channel",
            name: 'funny',
            permissions: ['SEND_MESSAGES'],
            usage: '`+funny`',
            category: 'general'
        });
    }

    async run(client, message, args){
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) {
            return message.reply(`Wow what a scrub, join a Voice Channel first`);
        }
        voiceChannel.join()
        const  connection = await voiceChannel.join();
        const stream  = ytdl('https://www.youtube.com/watch?v=dQw4w9WgXcQ', {filter: 'audioonly'});

        connection.play(stream, {seek: 0, volume: 1})
        .on('finish', () =>{
            voiceChannel.leave();
            message.channel.send('leaving channel');
        });
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setDescription(`👍 Now Playing ***Your Link!***`)
        await message.reply(newEmbed)

        return
    }
}