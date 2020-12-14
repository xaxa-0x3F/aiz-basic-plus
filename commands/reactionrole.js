const Discord = require('discord.js');
//const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const reactionClient = new Discord.Client({partials: ["CHANNEL", "MESSAGE", "EMOJI", "RECATION"]});
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

        reactionClient.on('messageReactionAdd', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id == channelToSend){
                if(reaction.emoji.name === Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Role);
                    ///await reaction.message.guild.members.cache.get(user.id).roles.remove(newbieRole);
                }
            } else {
                return;
            }
        });

        reactionClient.on('messageReactionRemove', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;
            if(reaction.message.channel.id == channelToSend){
                if(reaction.emoji.name === Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(Role);
                }
            } else {
                return;
            }
        });
    }
}