const db = require('quick.db');
const Discord = require('discord.js');
module.exports = {
    name : 'prefix',
    description : 'used for changing my prefix',
    execute(message, args){
        if(message.member.permissions.has("ADMINISTRATOR")){
            if(args[0]===null || args[0]===undefined){
                message.reply('You need to define the prefix <3');
            } else{
            db.set(`${message.guild.id}prefix`, args[0])
            return message.reply('My prefix is now `' + args[0] + '`    👏 👏 👏') 
            }
            } else {
                message.channel.send('You must be an admin to change the prefix 😢');
            }
    }
}