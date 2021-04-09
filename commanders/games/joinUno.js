const BaseCommand = require('../../BaseClasses/baseCommand');

module.exports = class joinUno extends BaseCommand {
    constructor(){
        super({
            aliases: ['ju'],
            description: "Adds you to the current uno game.",
            name: 'joinuno',
            permissions: ['SEND_MESSAGES'],
            usage: '`+joinuno`',
            category: 'games'
        });
    }

    async run(client, message, args){
        client.discordUNO.addUser(message);
    }
}