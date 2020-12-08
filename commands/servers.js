module.exports = {
    name: 'servers',
    description: "this displays how many servers AisBasic+ is in! :)",
    execute(message, args, client){
        client.guilds.cache.forEach((guild) =>{
            message.channel.send(guild);
        });
    }
}