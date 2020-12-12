const Discord = require('discord.js');

module.exports = {
    name: 'pfp' || 'avatar' || 'av',
    description: 'Sends your current pfp',
    execute(message, args){
        message.channel.send(message.author.displayAvatarURL());
        /*const embed = new Discord.MessageEmbed()
        .setThumbnail(message.author.displayAvatarURL());
        
        await message.channel.send(embed)*/
}
}
