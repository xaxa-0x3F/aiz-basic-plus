const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');
module.exports = class purge extends BaseCommand {
    constructor(){
        super({
            aliases: ['delete'],
            description: "Delete a specified number of messages.",
            name: 'purge',
            permissions: ['MANAGE_MESSAGES'],
            usage: '`+purge <# of messages>`',
            category: 'moderation'
        });
    }

    async run(client, message, args){
        if(!args[0]) return message.reply("Please enter the amount of messages that you want to clear.").then(msg => { msg.delete({ timeout: 3000 })}).catch(console.error);
        if(isNaN(args[0])) return message.reply("Please enter a number.").then(msg => { msg.delete({ timeout: 3000 })}).catch(console.error);
        if(args[0] > 100) return message.reply("You can't delete more than 100 messages!").then(msg => { msg.delete({ timeout: 3000 })}).catch(console.error);
        if(args[0] < 1) return message.reply("You must delete at least 1 message!").then(msg => { msg.delete({ timeout: 3000 })}).catch(console.error);

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setDescription(`Deleting ${args[0]} messages!`)
        message.channel.send(newEmbed).then(msg => { msg.delete({ timeout: 3000 })}).catch(console.error);
    }
}