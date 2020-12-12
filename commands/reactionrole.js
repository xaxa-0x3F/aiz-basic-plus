const Discord = require('discord.js');
module.exports = {
    name: 'reactionrole',
    description: 'Sets up a reaction role message',
    async execute(message, args, Discord, client){
        let channel = args[0].id;
        let Role = message.guild.roles.cache.find(role => role.name === args[3]);
        //const newbieRole = message.guild.roles.cache.find(role => role.name === args[4]);
        
        let Emoji = client.emojis.cache.find(emoji => emoji.name === args[2].name);
        let embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`${args[1]}`);
        let messageEmbed = await message.channel.send(embed);
        console.log(Emoji);
        messageEmbed.react(Emoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id == channel){
                if(reaction.emoji.name === Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Role);
                    ///await reaction.message.guild.members.cache.get(user.id).roles.remove(newbieRole);
                }
            } else {
                return;
            }
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;
            if(reaction.message.channel.id == channel){
                if(reaction.emoji.name === Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(Role);
                }
            } else {
                return;
            }
        });
    }
}