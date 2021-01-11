const BaseCommand = require('../../BaseClasses/baseCommand');

module.exports = class dmMe extends BaseCommand {
    constructor(){
        super({
            aliases: ['dmme', 'sendmedm'],
            description: 'I will dm you whatever you would like.',
            name: 'dmMe',
            permissions: ['SEND_MESSAGES'],
            usage: '`+dmMe <the message you want>`',
            category: 'general'
        });
    }

    async run(client, message, args){
        message.author.send(args.slice(0).join(' '));
    }
}