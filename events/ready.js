const baseEvent = require("../BaseClasses/baseEvent");
const memberCounter = require('../counters/member-counter');

module.exports = class ready extends baseEvent {
    constructor(){
        super('ready');
    }

    async run(client, guild, message){
        console.log(` ${client.user.username} is logged in`);

        /*const role = client.guild.roles.cache.get('Aiz Basic+');
        role.edit({ name: 'Aiz Basic+', color: '#FFC0CB' });*/

        client.user.setPresence({
            activity: {
                name: '+help | +invite | +vote',
                type: "WATCHING",
            }
        }); 

        const role = guild.roles.cache.find((r) => r.name === 'Aiz Basic+');
        client.guilds.cache.forEach((g) => {  
            role.edit({
                color: '#FFB6C1'
            })
        });
    
        memberCounter(client);
    }
}