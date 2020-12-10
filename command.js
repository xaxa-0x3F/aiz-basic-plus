var prefix = db.fetch(`${message.guild.id}prefix`)
if(prefix === null || isNaN(prefix)){
  prefix = '+'
}

module.exports = (client, aliases, callback) => {
    if(typeof aliases === 'string'){
        aliases = [aliases]
    }

    client.on('message', message => {
        const { content } = message;

        aliases.forEach(alias => {
            const command = `${prefix}${alias}`;

            if(content.startsWith(`${command}`) || content===command){
                callback(message);
            }
        });
    });
}
