const BaseCommand = require('../../BaseClasses/baseCommand');

module.exports = class startUno extends BaseCommand {
    constructor(){
        super({
            aliases: ['su'],
            description: "Starts an uno game.",
            name: 'startuno',
            permissions: ['SEND_MESSAGES'],
            usage: '`+startuno`',
            category: 'games'
        });
    }

    async run(client, message, args){
        client.discordUNO.startGame(message);
    }
}