const baseEvent = require("../BaseClasses/baseEvent");
const memberCounter = require('../counters/member-counter');

module.exports = class ready extends baseEvent {
    constructor(){
        super('ready');
    }

    async run(client){
        console.log(` ${client.user.username} is logged in`);

        client.user.setPresence({
            activity: {
                name: '+help | +invite | +vote',
                type: "WATCHING",
            }
        });
    
        memberCounter(client);
    }
}