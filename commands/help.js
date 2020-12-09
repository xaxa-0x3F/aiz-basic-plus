const Discord = require('discord.js');
module.exports = {
    name: 'help',
    description: "Help with commands!",
    execute(message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setTitle('Rules')
        .setURL('https://www.youtube.com/channel/UC7Rlc68ImIV32Y95xLmTSpA?view_as=subscribera')
        .setDescription('This is an embed for help')
        .addFields(
            {name: 'ping', value: 'reutrns: "pong!"'},
            {name: 'youtube', value: 'sends a link to the cretor`s youtube.'},
            {name: 'dungeon destiny', value: 'sends a link to Dungeon Destiny.'},
            {name: 'makeabot', value: 'sends a youtube link on where to learn how to make a bot'},
            {name: 'timedmute', value: 'mutes a user used as~ +timedmute @user 1m ~ (1s, 1m, 1h, 1d, 1y'},
            {name: 'mute', value: 'mutes a user used as~ +mute @user'},
            {name: 'unmute', value: 'unmutes a user used as~ +unmute @user'},
            {name: 'kick', value: 'kicks a member used as~ +kick @user'},
            {name: 'ban', value: 'bans a member used as~ +ban @user'},
            {name: 'delete', value: 'deletes the amount of messages entered used as~ +delete 20'},
            {name: 'inviteme', value: 'sends a link to invite me to your server!'},
            {name: 'servers', value: 'displays how many servers Im currently in!'}
        )
        .setImage('https://pa1.narvii.com/6518/5354d7ecc11e93741984c1ca103f37b5eecca047_hq.gif')
        .setFooter('More help here~>\nhttps://discord.gg/bR4R4PE6a4');

        message.channel.send(newEmbed);
    }
}