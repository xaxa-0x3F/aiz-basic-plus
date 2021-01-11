const readDir = require('readdir-plus');

module.exports = class registerEvents {
    dir;
    client;
    constructor(dir, client){
        this.dir = dir;
        this.client = client;
    }

    init() {
        readDir(this.dir, (err, files) => {
            if(err) throw err;

            for (const file of files){

                const EventFile = require(file.path);
                const Event = new EventFile();

                this.client.on(Event.name, Event.run.bind(null, this.client));
            }
        });
    }
}