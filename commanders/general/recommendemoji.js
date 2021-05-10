const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');

module.exports = class recommendemoji extends BaseCommand {
    constructor(){
        super({
            aliases: ['recE', 'reccomende', 'suggestemoji', 'suggeste'],
            description: "Suggest a new feature for me, or for the support server!",
            name: 'recommendemoji',
            permissions: ['SEND_MESSAGES'],
            usage: '`+recommend <message>`',
            category: 'general'
        });
    }

    async run(client, message, args){
        const channelToSend = message.guild.channels.cache.find(channel => channel.name === '👍-recommendations');
        const Author = message.author;        ;
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setTitle(`Emoji Recommendation:`)
        .setDescription(args.slice(0).join(' '))
        .setAuthor(message.author.tag, message.author.avatarURL());

        const errorEmbed = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setTitle('Uh oh!')
        .setDescription('You need to have a link or file');

        const sentEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription('Emoji Recommendation Sent!');

        if(message.length <= '0' || message == null || message == undefined){
            message.channel.send(errorEmbed).then(msg => { msg.delete({ timeout: 3000 })}).catch(console.error);
        } else{
            const question = await channelToSend.send(newEmbed); 

            ['👍', '👎'].forEach(async el => await question.react(el)); 
        }
    }
}