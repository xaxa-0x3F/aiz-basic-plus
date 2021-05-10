const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');

module.exports = class say extends BaseCommand {
    constructor(){
        super({
            aliases: ['echo'],
            description: "Tell the bot to send a message.",
            name: 'say',
            permissions: ['SEND_MESSAGES'],
            usage: '`+say`',
            category: 'general'
        });
    }

    async run(client, message, args){
        if(message.content.toLowerCase().includes("stupid")){
          message.reply(" you are the stupid one :)")
        } else if(message.content.toLowerCase().includes("@everyone")){
          message.reply(", seriously someone get a mod he just tried to ping everyone. :rollingeyes:")
        } else if(!message.content.toLowerCase().includes("stupid")){
          const content = args.slice(0).join(' ')
          message.delete()
          message.channel.send(content);
        }
    }
}