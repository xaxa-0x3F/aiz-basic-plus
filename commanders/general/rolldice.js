const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');

module.exports = class rolldice extends BaseCommand {
    constructor(){
        super({
            aliases: ['roll'],
            description: "SRolls a dice, 1-6",
            name: 'rolldice',
            permissions: ['SEND_MESSAGES'],
            usage: '`+rolldice`',
            category: 'general'
        });
    }

    async run(client, message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription('The dice rolled a ' + '`' + Math.floor((Math.random() * 6) + 1) + '`')

        message.channel.send(newEmbed);
    }
}
