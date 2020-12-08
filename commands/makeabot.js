module.exports = {
    name: 'makeabot',
    description: "this is a link to a channel on how to make a discord bot",
    execute(message, args){
        let role = message.guild.roles.cache.find(r => r.name === "Admin");

        /* if(message.member.permissions.has("KICK_MEMBERS")){
            message.channel.send('You can kick losers out dis server boyo');
        } else{
            message.channel.send('You can not kick members loser');
        } */
        message.channel.send('Check out this channel for how to make a bot like me ;)\nhttps://www.youtube.com/channel/UC08G-UJT58SbkdmcOYyOQVw');
    }
}