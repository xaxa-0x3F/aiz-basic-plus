const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');
const Levels = require('discord-xp');

module.exports = class leaderboard extends BaseCommand {
    constructor(){
        super({
            aliases: ['lb'],
            description: "Displays server's ranking leaderboard",
            name: 'leaderboard',
            permissions: ['SEND_MESSAGES'],
            usage: '`+leaderboard`',
            category: 'general'
        });
    }

    async run(client, message, guild){
        const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 5);
        if(rawLeaderboard.length < 1) return reply("Your leaderboard is not yet setup.");

        const leaderboard = Levels.computeLeaderboard(client, rawLeaderboard);
        const lb = (await leaderboard).map(e => `**${e.position}**. ${e.username}#${e.discriminator} ~ **Level ${e.level}** ~ **XP**: *${e.xp.toLocaleString()}*`);

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setTitle(`${message.guild.name}'s Level Leaderboard`)
        .setDescription(`${lb.join("\n\n")}`);

        message.channel.send(newEmbed);
    }
}