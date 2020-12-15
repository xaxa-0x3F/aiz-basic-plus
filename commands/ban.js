module.exports = {
    name: 'ban',
    description: 'Used for banning members',
    execute(message, args){
        if(message.member.permissions.has('BAN_MEMBERS')){
            const member = message.mentions.users.first();
            if(member.bannable == false){
                message.channel.send(`You cannot ban ${member}, sorry!`).react('😓');
            }
            if(member.bannable == true){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban({reason: args[1]});
                message.channel.send(`${member} was banned.` + '\n' + `Reason: ${args[1]}`).react('👍');
            } else{
                message.channel.send('User not found/Mentioned.').react('❓');
            }
        } else {
            message.channel.send('You cannot ban members.');
        }
    }
}