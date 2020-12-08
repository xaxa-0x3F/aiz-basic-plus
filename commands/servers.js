module.exports = {
    name: 'servers',
    description: "this displays how many servers AisBasic+ is in! :)",
    execute(message, args, guilds, client){
        var discordservers = [];
        client.guilds.forEach(g => {
            discordservers.push(g.name); // use g.id for each server's id, or you can use g.name -- id: g.id
        })
        message.channel.send(`${discordservers.join('\n')}`);
    }
}