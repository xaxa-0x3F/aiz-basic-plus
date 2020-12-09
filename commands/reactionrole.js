module.exports = {
    name: 'reactionrole',
    description: 'Sets up a reaction role message',
    async execute(message, args, Discord, client){
        const channel = '785642283919474708';
        const memberRole = message.guild.roles.cache.find(role => role.name === "Member");
        
        const memberemoji = '👍';
        let embed = newDiscord.MessageEmbed()
            .setColor('#FFB6C1')
            .setTitle('React to get your roles!')
            .setDescription('👍 = Member role!');
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(memberEmoji);
    }
}