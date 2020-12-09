module.exports = {
    name: 'ping',
    description: "this is a ping command",
    execute(message, args){
        const Discord = require('discord.js');
module.exports = {
    name: 'inviteme',
    description: "How to invite.",
    execute(message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setTitle('PONG!')
        .setURL('https://www.youtube.com/channel/UC7Rlc68ImIV32Y95xLmTSpA?view_as=subscribera')
        .setDescription('This is a link to invite me to your server!')
        .addFields(
            {name: 'pong', value: 'pong'}
        )
        .setImage('https://thumbs.gfycat.com/DaringDimwittedFlyingsquirrel-max-1mb.gif')
        .setFooter('hehheheheheh<3');

        message.channel.send(newEmbed);
    }
}
    }
}