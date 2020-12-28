module.exports = {
    name: 'kick',
    description: 'Used for kicking members',
    execute(message, args){
        if(message.member.permissions.has('KICK_MEMBERS')){
            const memberr = message.mentions.members.first(); 
            if(memberr.kickable==false){
                message.channel.send(`You cannot kick ${memberr}, sorry!`);
            }
            if(memberr.kickable==true){
                const memberTarget = message.guild.members.cache.get(memberr.id);
                const reason = args.slice(1).join(' ');
                memberTarget.kick({reason: reasonn});
                message.channel.send(`${member} has been successfully kicked!`+`Reason: ${reason}`);
            }
        } else {
            message.channel.send('You cannot kick members.');
        }
    }
}