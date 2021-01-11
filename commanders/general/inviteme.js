const Discord = require('discord.js');
const BaseCommand = require('../../BaseClasses/baseCommand');

module.exports = class inviteme extends BaseCommand {
    constructor(){
        super({
            aliases: ['invite'],
            description: "Sends an invite to add me to your server ❤",
            name: 'inviteme',
            permissions: ['SEND_MESSAGES'],
            usage: '`+inviteme`',
            category: 'general'
        });
    }

    async run(client, message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setTitle('Invite me here!')
        .setURL('https://www.youtube.com/channel/UC7Rlc68ImIV32Y95xLmTSpA?view_as=subscribera')
        .setDescription('This is a link to invite me to your server!')
        .addFields(
            {name: 'invite', value: 'https://discord.com/api/oauth2/authorize?client_id=784994557489184779&permissions=8&scope=bot'}
        )
        .setThumbnail('https://pa1.narvii.com/6518/5354d7ecc11e93741984c1ca103f37b5eecca047_hq.gif')
        .setFooter('More help here~>\nhttps://discord.gg/bR4R4PE6a4');

        message.channel.send(newEmbed);
    }
}