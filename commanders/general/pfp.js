const BaseCommand = require('../../BaseClasses/baseCommand');

module.exports = class pfp extends BaseCommand {
    constructor(){
        super({
            aliases: ['avatar', 'av', 'profilepic'],
            description: "Displays a your profile picture",
            name: 'pfp',
            permissions: ['SEND_MESSAGES'],
            usage: '`+pfp <optional user>`',
            category: 'general'
        });
    }

    async run(client, message, args){
        let target = message.mentions.members.first(); 
        message.channel.send(message.author.displayAvatarURL());

        if(target) message.channel.send(target.displayAvatarURL());
    }
}