const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');

module.exports = class play extends BaseCommand {
    constructor(){
        super({
            aliases: ['playSong'],
            description: "Plays a song based off keyword. !Must be in a VC!",
            name: 'play',
            permissions: ['SEND_MESSAGES'],
            usage: '`+play <enter keyword>`',
            category: 'music'
        });
    }

    async run(client, message, args){
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send('You need to be in a voice channel to use this command ❤').then(msg => { msg.delete(3000)});
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if(!permissions.has('CONNECT')) return message.channel.send('You are not allowed to use this command ❤').then(msg => { msg.delete(3000)});
        if(!permissions.has('SPEAK')) return message.channel.send('You are not allowed to use this command ❤').then(msg => { msg.delete(3000)});
        if(!args.length) return message.channel.send('You need to define play ❤').then(msg => { msg.delete(3000)});
    
        const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }

        if(validURL(args[0])){
 
            const  connection = await voiceChannel.join();
            const stream  = ytdl(args[0], {filter: 'audioonly'});
 
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave();
                message.channel.send('leaving channel').then(msg => { msg.delete(3000)});
            });
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#FFB6C1')
            .setDescription(`👍 Now Playing ***Your Link!***`)
            await message.reply(newEmbed).then(msg => { msg.delete(3000)});
 
            return
        }

        const connection = await voiceChannel.join();

        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);

            return(videoResult.videos.length > 1) ? videoResult.videos[0] : null;
        }
        const video = await videoFinder(args.join(' '));

        if(video){
            const stream = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () => {
                voiceChannel.leave();
            });
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#FFB6C1')
            .setDescription(`👍 Now playing ***${video.title}***`)
            await message.reply(newEmbed).then(msg => { msg.delete(3000)});
        } else {
            message.channel.send('No results found 😢').then(msg => { msg.delete(3000)});
        }
    }
}