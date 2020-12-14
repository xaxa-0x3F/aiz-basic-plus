const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
//const reactionClient = new Discord.Client({partials: ["CHANNEL", "MESSAGE", "EMOJI", "RECATION"]});
module.exports = {
    name: 'reactionrole',
    description: 'Sets up a reaction role message',
     async execute(message, args, client){
        let channelToSend = message.guild.channels.cache.find(channel => channel.toString() === args[0]);
        let Role = message.guild.roles.cache.find(role => role.name === args[3]);
        //const newbieRole = message.guild.roles.cache.find(role => role.name === args[4]);
        
        let Emoji = message.guild.emojis.cache.get(emoji => emoji.toString() === args[2].name);
        channelToSend.send(args[1])
        let msg = await channelToSend.send(args[1])
        msg.react(args[2])
        console.log(Emoji);
        //messageEmbed.react(Emoji);
    }
}
//const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});