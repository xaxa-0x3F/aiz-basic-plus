const Discord = require('discord.js');
const BaseCommand = require('../../BaseClasses/baseCommand');

module.exports = class ping extends BaseCommand {
    constructor(){
        super({
            aliases: ['pong'],
            description: 'Ping pong.',
            name: 'ping',
            permissions: ['SEND_MESSAGES'],
            usage: 'pong',
            category: 'general'
        });
    }

    async run(client, message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setTitle('PONG!')
        .setDescription('Mega PONG')
        .addFields(
            {name: 'pong', value: 'pong'}
        )
        .setThumbnail('https://thumbs.gfycat.com/DaringDimwittedFlyingsquirrel-max-1mb.gif')
        .setFooter('hehheheheheh<3');

        message.channel.send(newEmbed);
    }
}