const Discord = require("discord.js");
module.exports = {
    name: 'listemojis', 
    description: 'lists your servers emojis',
    async execute(message){
        try{
            const emojiList = message.guild.emojis.cache.map(e=>e.toString()).join(" ");
            const newEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM').setTitle(`${message.guild.name}'s Emojis`)
            .addField('~',emojiList);
        } catch(err){
            message.channel.send('You have no cutom server emotes.\n' + `${err}`);
        }
    }
}