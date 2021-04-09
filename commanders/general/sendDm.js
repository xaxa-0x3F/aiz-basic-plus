const BaseCommand = require('../../BaseClasses/baseCommand');
const usedCommand = new Set();

module.exports = class dm extends BaseCommand {
    constructor(){
        super({
            aliases: ['dm'],
            description: "Sends resources on how to make a discord.js bot.",
            name: 'sendDm',
            permissions: ['SEND_MESSAGES'],
            usage: '`+sendDm <user> <message>`',
            category: 'general'
        });
    }

    async run(client, message, args){
        if(usedCommand.has(message.author.id)){
            message.channel.send(usedEmbed);
        } else {
            let target = message.mentions.users.first() ||message.author;
            target.send(args.slice(0).join(' '));

            usedCommand.add(message.author.id);
            setTimeout(() => {
                usedCommand.delete(message.author.id);
            }, 43200200);
        }
    }
}