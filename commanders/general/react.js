const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');

module.exports = class react extends BaseCommand {
    constructor(){
        super({
            aliases: ['reactt'],
            description: "React to a message with an emoij!",
            name: 'react',
            permissions: ['SEND_MESSAGES'],
            usage: '`+react <message id> <emoji>`',
            category: 'general'
        });
    }

    async run(client, message, args){
      let mes = args[0];
      let emoji = args[0];

      if(!args[0]) return;
      if(args[0].content.length != 18) return;

      mes.react(emoji).catch(console.error);
  }
}
