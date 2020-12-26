module.exports = {
    name: 'dmMe',
    description: 'Dm-s the user what they sent to the bot.',
    execute(message, args){
        message.author.send(args.slice(0).join(' '));
    }
}