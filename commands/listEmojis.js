const Discord = require("discord.js");
module.exports = {
    name: 'listemojis', 
    description: 'lists your servers emojis',
    async execute(message){
        try{
            const emojiList = message.guild.emojis.cache.map(e=>e.toString()).join(" ");
            message.channel.send(emojiList, {split: {char: ' ' }});
        } catch(err){
            message.channel.send('You have no cutom server emotes.\n' + `${err}`);
        }
    }
}