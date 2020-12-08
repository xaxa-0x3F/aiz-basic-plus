module.exports = {
    name: 'kick',
    description: 'Used for kicking members',
    execute(message, args){
        if(message.member.permissions.has('KICK_MEMBERS')){
            const member = message.mentions.users.first();
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick();
                message.channel.send(`${member} has been successfully kicked!`);
            } else{
                message.channel.send('User not found/Mentioned.')
            }
        } else {
            message.channel.send('You cannot kick members.');
        }
    }
}