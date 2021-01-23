const baseEvent = require("../BaseClasses/baseEvent");

module.exports = class messageDelete extends baseEvent {
    constructor(){
        super('messageDelete');
    }

    async run(client, message){
        
    }
}