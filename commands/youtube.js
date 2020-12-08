module.exports = {
    name: 'youtube',
    description: "this is a link to the creator's youtube!",
    execute(message, args){
        let role = message.guild.roles.cache.find(r => r.name === "Admin");

        /* if(message.member.permissions.has("KICK_MEMBERS")){
            message.channel.send('You can kick losers out dis server boyo');
        } else{
            message.channel.send('You can not kick members loser');
        } */
        message.channel.send('https://www.youtube.com/channel/UC7Rlc68ImIV32Y95xLmTSpA?view_as=subscriber');
        
        //message.channel.send("You don't have permissions to use this command. Here take this role and try again.");
        //message.member.roles.add(role).catch(console.error);
    }
}