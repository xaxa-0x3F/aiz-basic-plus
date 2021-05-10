const BaseCommand = require('../../BaseClasses/baseCommand');
const usedCommand = new Set();
const Discord = require('discord.js');
const punishments = require('../../database/Schemas/ModSchema');

module.exports = class warn extends BaseCommand {
    constructor(){
        super({
            aliases: ['scare'],
            description: "Warns a user of an action.",
            name: 'warn',
            permissions: ['KICK_MEMBERS'],
            usage: '`+warn <user> <reason>`',
            category: 'moderation'
        });
    }

    async run(client, message, args){
        const usedEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM').setDescription(`You're on cooldown for the command`);

        const noUse = new Discord.MessageEmbed()
        .setColor('RANDOM').setDescription(`${message.author.tag} you are not allowed to use this command :(`);

        if(usedCommand.has(message.author.id)){
            message.channel.send(usedEmbed).then(msg => { msg.delete({ timeout: 3000 })}).catch(console.error);
        } else { 
            const toWarn = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

            if(!message.member.hasPermission("KICK_MEMBERS")) {
                return message.channel.send(noUse).then(msg => { msg.delete({ timeout: 3000 })}).catch(console.error);
            }

            if(message.author.id === toWarn.id) return;
            const reason = args.slice(1).join(' ');

            let data = await punishments.findOne({
                GuildID: message.guild.id,
                UserID: toWarn.id
            });

            if(!reason) return message.channel.send(nrEm);

            if(data){
                data.Punishments.unshift({
                    PunishType: 'Warn',
                    Moderator: message.author.id,
                    Reason: reason,
                });

                data.save();

                const warnedEmm = new Discord.MessageEmbed().setColor('RANDOM')
                .setDescription(`Warned ${toWarn} for **${reason}**`)
                message.channel.send(warnedEmm);

            } else if(!data){
                let newData = new punishments({
                    GuildID: message.guild.id,
                    UserID: toWarn.id,
                    Punishments: [{
                        PunishType: 'Warn',
                        Moderator: message.author.id,
                        Reason: reason,
                    }]
                });

                newData.save();

                const warnedEm = new Discord.MessageEmbed().setColor('RANDOM')
                .setDescription(`Warned ${toWarn} for **${reason}**`)
                message.channel.send(warnedEm);
            }

            usedCommand.add(message.author.id);
            setTimeout(() => {
                usedCommand.delete(message.author.id);
            }, 3000); 
        }
    }
}