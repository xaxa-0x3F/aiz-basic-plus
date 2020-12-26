module.exports = {
    name: 'randomMessage',
    description: 'Sends a random message!',
    execute(message, args){
        var rando = channel.messages.cache.random();
        message.channel.send(`${rando}`);
    }
}