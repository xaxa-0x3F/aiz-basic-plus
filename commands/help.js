const Discord = require('discord.js');
const pagination = require('discord.js-pagination');
module.exports = {
    name: 'help',
    description: "Help with commands!",
    execute(client, message, args){
        const moderation = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setTitle('Moderation Commands')
        .setURL('https://discord.gg/bR4R4PE6a4')
        .setAuthor('Ais ~ Made by eh_asuna', 'https://i.pinimg.com/originals/62/55/9d/62559ddae39f168993b3e866bd01cc67.gif', 'https://www.youtube.com/channel/UC7Rlc68ImIV32Y95xLmTSpA?view_as=subscriber')
        .setDescription('Moderation commands can only be performed by authorized roles.')
        .addFields(
            {name: 'timedmute', value: 'mutes a user used as~ `+timedmute @user 1m` ~ (1s, 1m, 1h, 1d, 1y'},
            {name: 'mute', value: 'mutes a user used as~ `+mute @user`, mute will look for the roles Member and Muted.\nGuide here~>'},
            {name: 'unmute', value: 'unmutes a user used as~ `+unmute @user`'},
            {name: 'kick', value: 'kicks a member used as~ `+kick @user`'},
            {name: 'ban', value: 'bans a member used as~ `+ban @user`'},
            {name: 'delete', value: 'deletes the amount of messages entered used as~ `+delete 20`'},
            {name: 'cc-clearchannel', value: 'Clears messages up to 2 weeks old'},
            {name: 'addrole', value: 'adds a role to a user~ Must be exact selling for role name ~ `+addRole Member @user`'},
            {name: 'Message Reactions', value: 'I add custom reactions to messages depending on phrases. You can shut this off/on using `+reactoff` ~ `+reacton`'}
        )
        .setThumbnail('https://pa1.narvii.com/6518/5354d7ecc11e93741984c1ca103f37b5eecca047_hq.gif')
        .setFooter('More help here~>\nhttps://discord.gg/bR4R4PE6a4', 'https://cdn.discordapp.com/attachments/786478743748345880/786547245335445514/you_1.png');
        
        const fun = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setTitle('Fun Commands')
        .setURL('https://discord.gg/bR4R4PE6a4')
        .setAuthor('Ais ~ Made by eh_asuna', 'https://i.pinimg.com/originals/62/55/9d/62559ddae39f168993b3e866bd01cc67.gif', 'https://www.youtube.com/channel/UC7Rlc68ImIV32Y95xLmTSpA?view_as=subscriber')
        .setDescription('Fun commands can be used by anybody unless disabled!')
        .addFields(
            {name: 'ping', value: 'reutrns: "pong!"'},
            {name: 'youtube', value: 'sends a link to the cretor`s youtube.'},
            {name: 'dungeon destiny', value: 'sends a link to Dungeon Destiny.'},
            {name: 'makeabot', value: 'sends a youtube link on where to learn how to make a bot'},
            {name: 'inviteme', value: 'sends a link to invite me to your server!'},
            {name: 'servers', value: 'displays how many servers Im currently in!'},
            {name: 'rolldice', value: 'roles a set of dice.'},
            {name: 'sendDm', value: 'sends a dm to a user `+sendDm @user message`'},
            {name: 'dmMe', value: 'I will send you a dm. `+dmMe Hello this is me Aiz!`'},
            {name: 'listemojis', value: 'List all of the current server emojis'}
        )
        .setThumbnail('https://pa1.narvii.com/6518/5354d7ecc11e93741984c1ca103f37b5eecca047_hq.gif')
        .setFooter('More help here~>\nhttps://discord.gg/bR4R4PE6a4', 'https://cdn.discordapp.com/attachments/786478743748345880/786547245335445514/you_1.png');
        
        const pages = [
            moderation,
            fun
        ]
        const emojiList = ["⏮", "⏭"];
        const timeout = "120000";

        pagination(message, pages, emojiList, timeout);
    }
}