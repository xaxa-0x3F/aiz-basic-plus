const baseEvent = require("../BaseClasses/baseEvent");

module.exports = class guildCreate extends baseEvent {
    constructor(){
        super('guildCreate');
    }

    async run(client, guild){

        /*const role = client.guild.roles.cache.get('Aiz Basic+');
        role.edit({ name: 'Aiz Basic+', color: '#FFC0CB' }); */

        let channelID;
        let channels = guild.channels.cache;

        channelLoop:
        for (let key in channels) {
            let c = channels[key];
            if (c[1].type === "text") {
                channelID = c[0];
                break channelLoop;
            }
        }

        const role = guild.roles.cache.find((r) => r.name === 'Aiz Basic+');
        client.guilds.cache.forEach((g) => {  
            role.edit({
                color: '#FFB6C1'
            })
        });


        let channel = guild.channels.cache.get(guild.systemChannelID || channelID);
        channel.send(`Hey thanks for inviting me ❤\nTo view my commands just do +help! My prefix is changable as well!.\n
        If you'd like to suggest any new changes, add-ons, or need help please join the following server!\n
        https://discord.gg/bR4R4PE6a4\n
        Like our bot upvote us here ~>\n
        https://top.gg/bot/784994557489184779`);
    }
}