const Discord = require('discord.js');
const { execute } = require('./mute');

module.exports = {
    name: 'clear channel',
    description: 'clear as many messages as possible.',
    execute(message, args){
        if(message.member.hasPermission('ADMINISTRATOR')){
            message.channel.messages.fetch().then((results) => {
                message.channel.bulkDelete(results);
            });
            message.channel.send('deleting as many messages as I can ❤');
        } else {
            return;
        }
    }
}