const BaseCommand = require('../../BaseClasses/baseCommand');
const Guild = require('../../database/Schemas/guild');
const Discord = require('discord.js');

module.exports = class unmute extends BaseCommand {
    constructor(){
        super({
            aliases: ['unmuteUser'],
            description: "Unmutes a user.",
            name: 'unmute',
            permissions: ['MUTE_MEMBERS'],
            usage: '`+makeabot`',
            category: 'moderation'
        });
    }

    async run(client, message, args){
        if(message.member.permissions.has('MUTE_MEMBERS')){
        const dbEm = new Discord.MessageEmbed()
        .setDescription('Something went wrong in the database, please try again.');

        const mentEm = new Discord.MessageEmbed()
        .setDescription('Please mention a user.');

        const member = message.mentions.members.first() || message.guild.cache.get(args[0]);

        const successEm = new Discord.MessageEmbed()
        .setDescription(`${member.user.tag} was successfully un-muted`);

        if(!member) return message.channel.send(mentEm)

        let guild = await Guild.findOne({guildId: message.guild.id});
        if(!guild) guild = await Guild.create({guildId: message.guild.id});

        if(guild.mutedUsers.find(u => u.uId == member.id)){
            const dbMember = guild.mutedUsers.find(u => u.uId == member.id);

            for(const roleId of dbMember.oldRole){
                if(roleId != message.guild.id){
                member.roles.add(roleId);
                }
            }

            member.roles.remove(guild.muteRole);

            guild.mutedUsers.splice(guild.mutedUsers.findIndex(u => u.uId == member.id), 1);
        }        

        try{
            await guild.updateOne(guild);
        }catch{
            return message.channel.send(dbEm)
        }

        return message.channel.send(successEm);
    }
    }
}