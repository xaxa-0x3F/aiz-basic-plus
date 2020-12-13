const ms = require('ms');
module.exports = {
    name: 'timedmute',
    description: "this mutes users.",
    execute(message, args){
        if(message.member.permissions.has("KICK_MEMBERS")){
            const target = message.mentions.users.first();
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
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}.`);
            setTimeout(function(){
                memberTarget.roles.add(mainRole.id);
                memberTarget.roles.remove(muteRole.id);
            }, ms(args[1]));
            }} else {
            message.channel.send('User not found.');
            }   
        } else{
            message.channel.send('You are not allowed to mute members.');
        } 
    }
}