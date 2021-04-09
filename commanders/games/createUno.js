const BaseCommand = require('../../BaseClasses/baseCommand');

module.exports = class createUno extends BaseCommand {
    constructor(){
        super({
            aliases: ['cu'],
            description: "Creates an uno game.",
            name: 'createuno',
            permissions: ['SEND_MESSAGES'],
            usage: '`+createuno`',
            category: 'games'
        });
    }

    async run(client, message, args){
        client.discordUNO.createGame(message);
    }
}