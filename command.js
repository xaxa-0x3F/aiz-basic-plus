const db = require('quick.db');

module.exports = (client, aliases, callback) => {
    if(typeof aliases === 'string'){
        aliases = [aliases]
    }

    client.on('message', message => {
        var prefix = db.fetch(`${message.guild.id}prefix`)
        if(prefix === null){
        prefix = '+'
        }
        const { content } = message;

        aliases.forEach(alias => {
            const command = `${prefix}${alias}`;

            if(content.startsWith(`${command}`) || content===command){
                callback(message);
            }
        }
    )})};