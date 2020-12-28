module.exports = {
    name: 'ban',
    description: 'Used for banning members',
    execute(message, args){
        if(message.member.permissions.has('BAN_MEMBERS')){
            const memberr = message.mentions.members.first();
            if(memberr.bannable == false){
                message.channel.send(`You cannot ban ${memberr}, sorry!`);
            }
            if(memberr.bannable == true){
                const memberTarget = message.guild.members.cache.get(member.id);
                const reasonn = args.slice(1).join(' ');
                memberTarget.ban({reason: reasonn});
                message.channel.send(`${memberr} was banned.` + '\n' + `Reason: ${reason}`);
            } else{
                message.channel.send('User not found/Mentioned.');
            }
         } else {
            message.channel.send('You cannot ban members.');
        }
    }
}