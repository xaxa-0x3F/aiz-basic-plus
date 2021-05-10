const BaseCommand = require('../../BaseClasses/baseCommand')
const axios = require('axios');
const Discord = require('discord.js');

module.exports = class gay extends BaseCommand {
    constructor(){
        super({
            aliases: ['gay'],
            description: "Make another user gay in your server!",
            name: 'urgay',
            permissions: ['SEND_MESSAGES'],
            usage: '`+urgay`',
            category: 'general'
        });
    }

    async run(client, message, args){
      const { MessageEmbed, MessageAttachment } = require('discord.js')

      let user = message.mentions.users.first();

      if (!user.avatarURL())
        return message.reply(`:x: ${user.tag} profile photo not found.`).then(msg => { msg.delete({ timeout: 3000 })}).catch(console.error);

      const embed = new MessageEmbed()
        .setColor('#FFB6C1')
        .setTitle(`${user.tag}! YOU'RE GAY!`)
        .setImage(`https://some-random-api.ml/canvas/gay/?avatar=${user.avatarURL({ format: 'png'})}`);

      message.channel.send(embed);
    }
}