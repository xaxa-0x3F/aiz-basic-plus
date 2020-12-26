module.exports = {
    name: 'sendDm', 
    description: 'Sends a dm to the tagged user.',
    async execute(message, args){
        try{
            const emojiList = message.guild.emojis.cache.map(e=>e.toString()).join(" ");
            message.channel.send(emojiList, { split: true });
        } catch(err){
            message.channel.send('You have no custom server emojis :(' + '||' + err + '||')
        }
    }
}