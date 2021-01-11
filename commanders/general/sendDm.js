const BaseCommand = require('../../BaseClasses/baseCommand');

module.exports = class sendDm extends BaseCommand {
    constructor(){
        super({
            aliases: ['dmUser'],
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
    }
}