module.exports = {
    name: 'reactionrole',
    description: 'Sets up a reaction role message',
    async execute(message, args, Discord, client){
        const channel = '785642283919474708';
        const memberRole = message.guild.roles.cache.find(role => role.name === "Member");
        const newbieRole = message.guild.roles.cache.find(role => role.name === "newbie");
        
        const memberEmoji = '👍';
        let embed = new Discord.MessageEmbed()
            .setColor('#FFB6C1')
            .setTitle('React to get your roles!')
            .setDescription(`${memberEmoji} = Member Role!`);
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(memberEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;
            
            if(!reaction.message.channel.id == channel){
                if(reaction.emoji.name === memberEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(memberRole);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(newbieRole);
                }
            } else {
                return;
            }
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;
            if(!reaction.message.channel.id == channel){
                if(reaction.emoji.name === memberEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(memberRole);
                }
            } else {
                return;
            }
        });
    }
}