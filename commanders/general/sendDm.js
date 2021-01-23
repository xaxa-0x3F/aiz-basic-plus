const BaseCommand = require('../../BaseClasses/baseCommand');

module.exports = class dm extends BaseCommand {
    constructor(){
        super({
            aliases: ['sendDm'],
            description: "Sends resources on how to make a discord.js bot.",
            name: 'sendDm',
            permissions: ['SEND_MESSAGES'],
            usage: '`+sendDm <user> <message>`',
            category: 'general'
        });
    }

    async run(client, message, args){
        let target = message.mentions.users.first();
        target.send(args.slice(0).join(' '));

        if(usedCommand.has(message.author.id)){
            message.channel.send(usedEmbed);
        } else {
            let target = message.mentions.users.first();
            
            if(!target) message.member.send(args.slice(0).join(' '));
            else if(target) target.send(args.slice(0).join(' '));

            usedCommand.add(message.author.id);
            setTimeout(() => {
                usedCommand.delete(message.author.id);
            }, 43200200);
        }
    }
}