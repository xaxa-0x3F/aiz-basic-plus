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
        const moment = require("moment");
        require("moment-duration-format");
        const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");

        const emb = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setTitle("Aiz's Uptime")
        .setDescription(duration)
        .setThumbnail('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fibpspo2016result.com%2Fpics%2Faiz-wallenstein.png&f=1&nofb=1')
        .setTimestamp();

        message.channel.send(emb);
        /*message.channel.send("\n" + "```javascript" + "\n" + "ModBot has been online for: " + "\n" + "Days : " + cMS.d + "\n" +
          "Hours : " + cMS.h + "\n" + "Minutes : " + cMS.m + "\n" + "Seconds : " + cMS.s + "```"); */
      }
}