const Discord = require('discord.js');
module.exports = {
    name: 'addrole',
    description: 'adds a role to a user',
    execute(message, args){
      try{
        if(message.member.permissions.has("ADMINISTRATOR")){
            let target = message.mentions.members.first(); 
            if(target){
            let addRole = message.guild.roles.cache.find(role => role.name === args[1]);
            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.add(addRole.id);
            message.channel.send({embed: {
              color: 	'#FFB6C1',
              description: `<@${memberTarget.user.id}> has been given the ${args[1]} role.`
            }});
            } else {
            message.channel.send('User not found.');
            }   
        } else{
            message.channel.send('You are not allowed to add roles.');
        }
      } catch(err){
            message.channel.send('`'+ err + '`');
    }
    }

}