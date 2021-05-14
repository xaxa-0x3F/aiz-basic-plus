const baseEvent = require("../BaseClasses/baseEvent");
const Guild = require('../database/Schemas/guild')
const Discord = require('discord.js');
const Canvas = require("discord-canvas");

module.exports = class ready extends baseEvent {
    constructor(){
        super('guildMemberAdd');
    }

    async run(client, member){
      let guild = await Guild.findOne({guildId: member.guild.id});
      if(!guild) guild = await Guild.create({guildId: member.guild.id}); 

      if(guild.muteRole !== ""){
          if(guild.mutedUsers.some(d => d.uId == member.id)) member.roles.add(guild.muteRole);
      }

      let roll = '785142527518310420'

      if(guild.id == '773052031514312704'){
        member.roles.add(roll).catch((e) => console.log(e));
      }

      let channnel = member.guild.channels.cache.find(ch => ch.name === '👋hello-goodbye');

      if (!channnel) return;

      let image = await new Canvas.Welcome()
        .setUsername(member.name)
        .setDiscriminator(member.discriminator)
        .setMemberCount(guild.memberCount)
        .setGuildName(guild.name)
        .setAvatar(member.avatarURL)
        .setColor("border", "#FF0000")
        .setColor("username-box", "#FF0000")
        .setColor("discriminator-box", "#FF0000")
        .setColor("message-box", "#FF0000")
        .setColor("title", "#FF0000")
        .setColor("avatar", "#FF0000")
        .setBackground("https://media.discordapp.net/attachments/773052032151715840/841524631928438784/Copy_of_Logo.png?width=316&height=421")
        .toAttachment();

        const attachment = new Discord.Attachment(image.toBuffer(), "goodbye-image.png");


        channnel.send(attachment);

    }
}