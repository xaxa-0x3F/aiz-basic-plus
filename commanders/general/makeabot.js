const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');

module.exports = class makeabot extends BaseCommand {
    constructor(){
        super({
            aliases: ['createabot'],
            description: "Sends resources on how to make a discord.js bot.",
            name: 'makeabot',
            permissions: ['SEND_MESSAGES'],
            usage: '`+makeabot`',
            category: 'general'
        });
    }

    async run(client, message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setDescription(`https://docs.google.com/document/d/1Igd7EJ081EM_chhgX09-43dy5da27QNjm25yZeGjYNg/edit?usp=sharing`)
        message.channel.send(newEmbed);
    }
}