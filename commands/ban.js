module.exports = {
    name: 'ban',
    description: 'Used for banning members',
    execute(message, args){
        if(message.member.permissions.has('BAN_MEMBERS')){
            const member = message.mentions.users.first();
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
                message.channel.send(`${member} has been successfully banned!`);
            } else{
                message.channel.send('User not found/Mentioned.')
            }
        } else {
            message.channel.send('You cannot ban members.');
        }
    }
}