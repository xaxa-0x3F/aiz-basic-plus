const BaseCommand = require('../../BaseClasses/baseCommand')
const axios = require('axios');
const Discord = require('discord.js');

module.exports = class arrest extends BaseCommand {
    constructor(){
        super({
            aliases: ['jail'],
            description: "jail another user in your server!",
            name: 'arrest',
            permissions: ['SEND_MESSAGES'],
            usage: '`+arrest`',
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
        .setTitle(`${message.author.tag} arrested ${user.tag}!`)
        .setImage(`https://some-random-api.ml/canvas/jail/?avatar=${user.avatarURL({ format: 'png'})}`);

      message.channel.send(embed);
    }
}