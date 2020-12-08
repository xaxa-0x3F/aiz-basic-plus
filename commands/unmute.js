module.exports = {
    name: 'unmute',
    description: "this unmutes users.",
    execute(message, args){
        if(message.member.permissions.has("KICK_MEMBERS")){
            const target = message.mentions.users.first();
            if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.roles.add(mainRole.id);
            memberTarget.roles.remove(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted.`);
            } else {
            message.channel.send('User not found.');
        }

        } else{
            message.channel.send('You are not allowed to mute members.');
        } 
    }
}