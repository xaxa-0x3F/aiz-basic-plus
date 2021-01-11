const Discord = require('discord.js');
const BaseCommand = require('../../BaseClasses/baseCommand');

module.exports = class addrole extends BaseCommand {
    constructor(){
        super({
            aliases: ['roleadd'],
            description: "Adds a role to a user.",
            name: 'addrole',
            permissions: ['MANAGE_ROLES'],
            usage: '`+addrole <user> <role>`',
            category: 'moderation'
        });
    }

    async run(client, message, args){
        if(message.member.permissions.has("MANAGE_ROLES")){
            let target = message.mentions.members.first(); 
            if(target){
            let memberRoles = target.roles.cache;
            let addRoler = message.mentions.roles.first();
            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.add(addRoler.id);

            message.channel.send({embed: {
              color: '#FFB6C1',
              description: `<@${memberTarget.user.id}> has been given the ${args[1]} role.`
            }});
            } else {
            message.channel.send('User or role not found.');
            }   
        } else{
            message.channel.send('You are not allowed to add roles.');
        }
    }
}
