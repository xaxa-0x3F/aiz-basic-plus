const baseEvent = require("../BaseClasses/baseEvent");
const memberCounter = require('../counters/member-counter');

module.exports = class ready extends baseEvent {
    constructor(){
        super('ready');
    }

    async run(client, guild, message){
        console.log(` ${client.user.username} is logged in`);

        let stateswitch = false;

        client.user.setPresence({ status: "online" });

        setInterval(() => {
          stateswitch = !stateswitch; //change state
          if (stateswitch) client.user.setActivity(`+help`, { type: "LISTENING" });
          else client.user.setActivity(`${client.guilds.cache.reduce((c, g) => c + g.memberCount, 0)} Members | ${client.guilds.cache.size} Servers`, { type: "WATCHING" });
        }, 5000); //5 second delay
        
        

    
        memberCounter(client);
    }
}