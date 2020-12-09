const Discord = require('discord.js');
const pagination = require('discord.js-pagination');
module.exports = {
    name: 'help',
    description: "Help with commands!",
    execute(client, message, args){
        const moderation = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setTitle('Moderation Commands')
        .setURL('https://www.youtube.com/channel/UC7Rlc68ImIV32Y95xLmTSpA?view_as=subscribera')
        .setDescription('Moderation commands can only be performed by authorized roles.')
        .addFields(
            {name: 'timedmute', value: 'mutes a user used as~ +timedmute @user 1m ~ (1s, 1m, 1h, 1d, 1y'},
            {name: 'mute', value: 'mutes a user used as~ +mute @user'},
            {name: 'unmute', value: 'unmutes a user used as~ +unmute @user'},
            {name: 'kick', value: 'kicks a member used as~ +kick @user'},
            {name: 'ban', value: 'bans a member used as~ +ban @user'},
            {name: 'delete', value: 'deletes the amount of messages entered used as~ +delete 20'}
        )
        //.setImage('https://pa1.narvii.com/6518/5354d7ecc11e93741984c1ca103f37b5eecca047_hq.gif')
        .setFooter('More help here~>\nhttps://discord.gg/bR4R4PE6a4');
        
        const fun = Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setTitle('Moderation Commands')
        .setURL('https://www.youtube.com/channel/UC7Rlc68ImIV32Y95xLmTSpA?view_as=subscribera')
        .setDescription('Fun commands can be used by anybody unless disabled!')
        .addFields(
            {name: 'ping', value: 'reutrns: "pong!"'},
            {name: 'youtube', value: 'sends a link to the cretor`s youtube.'},
            {name: 'dungeon destiny', value: 'sends a link to Dungeon Destiny.'},
            {name: 'makeabot', value: 'sends a youtube link on where to learn how to make a bot'},
            {name: 'inviteme', value: 'sends a link to invite me to your server!'},
            {name: 'servers', value: 'displays how many servers Im currently in!'}
        )
        //.setImage('https://pa1.narvii.com/6518/5354d7ecc11e93741984c1ca103f37b5eecca047_hq.gif')
        .setFooter('More help here~>\nhttps://discord.gg/bR4R4PE6a4');
        
        const pages = [
            moderation,
            fun
        ]
        const emojiList = ["⏮", "⏭"];
        const timeout = "120000";

        pagination(message, pages, emojiList, timeout);
    }
}