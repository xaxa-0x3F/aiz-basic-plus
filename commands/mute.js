module.exports = {
    name: 'mute',
    description: "this mutes users.",
    execute(message, args){
    try {
        if(message.member.permissions.has("KICK_MEMBERS")){
            let target = message.mentions.members.first(); 
            if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
            let memberTarget = message.guild.members.cache.get(target.id);
            
            if(memberTarget.permissions.has("KICK_MEMBERS")){
                message.channel.send({embed: {
                    color: '#FFB6C1',
                    description: "You can't mute moderators"
                }});
            } else {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted.`); 
            }
            } else {
            message.channel.send('User not found.');
            }   
        } else{
            message.channel.send('You are not allowed to mute members.');
        } 
    } catch(err){
        message.channel.send('You need a Member role & a Muted role');
    }
    }
} 