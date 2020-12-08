module.exports = {
    name: 'servers',
    description: "this displays how many servers AisBasic+ is in! :)",
    execute(message, args, guilds){
        message.channel.send(`${discordservers.join('\n')}`);
    }
}