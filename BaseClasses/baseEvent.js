module.exports = class baseEvent {
    name;
    constructor(name){
        this.name = name;
    }

    async run(client, ...args){};
}