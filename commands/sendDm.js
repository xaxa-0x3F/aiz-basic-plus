module.exports = {
    name: 'sendDm', 
    description: 'Sends a dm to the tagged user.',
    execute(message, args){
        let target = message.mentions.users.first();
        target.send(args.slice(0).join(' '));
    }
}