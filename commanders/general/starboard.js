const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js')

module.exports = class starboard extends BaseCommand {
    constructor(){
        super({
            aliases: ['pin', 'star'],
            description: "Pins a message to the starboard.",
            name: 'starboard',
            permissions: ['ADMINISTRATOR'],
            usage: '`+sendDm <user> <message>`',
            category: 'general'
        });
    }

    async run(client, message, args){
      const channelToSend = message.guild.channels.cache.find(channel => channel.name === '🌟-star-board');
      
      if(message.guild.id == '773052031514312704'){
        
        message.channel.messages.fetch(args[0])
        .then(mm => {
          const newEmbed = new Discord.MessageEmbed()
            .setColor('#FFB6C1')
            .setImage(mm.attachments.first().url)
            .setDescription(mm.content)
            .setAuthor(mm.author.tag, mm.author.avatarURL())

            const sentEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`${args[0]}\nAdded to starboard.`);

            channelToSend.send(newEmbed);
            message.channel.send(sentEmbed).then(msg => { msg.delete({ timeout: 3000 })}).catch(console.error);
        })
        .catch(console.error);
      }
    }
}