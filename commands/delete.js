module.exports = {
    name: 'delete',
    description: 'Delete a certain amount of previous messages.',
    async execute(message, args){
        if(!args[0]) return message.reply("Please enter the amount of messages that you want to clear.");
        if(isNaN(args[0])) return message.reply("Please enter a number.");
        if(args[0] > 100) return message.reply("You can't delete more than 100 messages!");
        if(args[0] < 1) return message.reply("You must delete at lease 1 message!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
        message.channel.send(`Deleting ${args[0]} message(s)!`);
    }
}