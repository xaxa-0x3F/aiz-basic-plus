module.exports = {
    name: 'kick',
    description: 'Used for kicking members',
    execute(message, args){
        if(message.member.permissions.has('KICK_MEMBERS')){
            const member = message.mentions.members.first() 
            if(member.kickable==false){
                message.channel.send(`You cannot kick ${member}, sorry!`);
            }
            if(member.kickable==true){
                const memberTarget = message.guild.members.cache.get(member.id);
                var reason = args[1];
                memberTarget.kick(reason);
                message.channel.send(`${member} has been successfully kicked!`+`Reason: ${reason}`);
            }
        } else {
            message.channel.send('You cannot kick members.');
        }
    }
}