const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');

module.exports = class uptime extends BaseCommand {
    constructor(){
        super({
            aliases: ['life'],
            description: "Shows how long I have been online!",
            name: 'uptime',
            permissions: ['SEND_MESSAGES'],
            usage: '`+uptime`',
            category: 'general'
        });
    }

    async run(client, message, args){ 
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

        const emb = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setTitle("Aiz's Uptime")
        .addFields(
          { name: 'Days:', value: `${days}`, inline: true },
          { name: 'Hours:', value: `${hours}`, inline: true },
          { name: 'Minutes:', value: `${minutes}`, inline: true },
          { name: 'Seconds', value: `${seconds}`, inline: true}
        )
        .setTimestamp();

        message.channel.send(emb);
        /*message.channel.send("\n" + "```javascript" + "\n" + "ModBot has been online for: " + "\n" + "Days : " + cMS.d + "\n" +
          "Hours : " + cMS.h + "\n" + "Minutes : " + cMS.m + "\n" + "Seconds : " + cMS.s + "```"); */
      }
}