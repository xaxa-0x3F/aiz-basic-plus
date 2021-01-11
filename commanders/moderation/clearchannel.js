const Discord = require('discord.js');
const BaseCommand = require('../../BaseClasses/baseCommand');

module.exports = class clearchannel extends BaseCommand {
    constructor(){
        super({
            aliases: ['cc'],
            description: "Clear as many messages as possible",
            name: 'clearchannel',
            permissions: ['MANAGE_MESSAGES'],
            usage: '`+clearchannel`',
            category: 'moderation'
        });
    }

    async run(client, message, args){
        if(message.member.hasPermission('ADMINISTRATOR')){
            message.channel.messages.fetch().then((results) => {
                message.channel.bulkDelete(results);
            });
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#FFB6C1')
            .setDescription(`deleting as many messages as I can ❤`)
            message.channel.send(newEmbed);
        } else {
            return;
        }
    }
}