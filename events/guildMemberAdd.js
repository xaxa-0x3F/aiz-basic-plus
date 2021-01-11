const baseEvent = require("../BaseClasses/baseEvent");
const Guild = require('../database/Schemas/guild')
const Discord = require('discord.js');

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
    }
}