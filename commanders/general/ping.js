const Discord = require('discord.js');
const BaseCommand = require('../../BaseClasses/baseCommand');

module.exports = class ping extends BaseCommand {
    constructor(){
        super({
            aliases: ['pong'],
            description: 'Ping pong.',
            name: 'ping',
            permissions: ['SEND_MESSAGES'],
            usage: 'pong',
            category: 'general'
        });
    }

    async run(client, message, args){
      const loadEm = new Discord.MessageEmbed()
      .setColor('#FFB6C1')
      .setDescription('Loading data...')

      message.channel.send(loadEm).then (async (msg) =>{
          msg.delete()
          
          const newEmbed = new Discord.MessageEmbed()
          .setColor('#FFB6C1')
          .setTitle('Ping Results~')
          .addFields(
              {name: 'Latency:', value: `${msg.createdTimestamp - message.createdTimestamp}ms`, inline: true},
              {name: 'API Latency:', value: `${Math.round(client.ws.ping)}ms`, inline: true}
          )
          .setTimestamp()
          .setThumbnail('https://thumbs.gfycat.com/DaringDimwittedFlyingsquirrel-max-1mb.gif');

          message.channel.send(newEmbed);
      })    
    }
}