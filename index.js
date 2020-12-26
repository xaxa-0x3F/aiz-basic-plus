const Discord = require('discord.js')
const fs = require('fs');
const db = require('quick.db');
const memberCounter = require('./counters/member-counter');
const client = new Discord.Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    diasbleEveryone: true
});

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () =>{
    console.log('AisBasic+ is ready!');

    client.user.setPresence({
        activity: {
            name: '+help | +invite | +vote',
            type: "WATCHING",
        }
    });

    memberCounter(client);
});

client.on('message', async message => {
    try{
    let  blacklisted = ['nigger'];
    let foundInText = false;
    for(var i in blacklisted){
        if(message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }
    if(foundInText){
        message.delete();
        message.reply('You are not allowed to say that.');
    }

    //Reaction Events
    if(mesage.content.toLowerCase().includes('@everyone')){
        message.react('🇾');
        message.react('🇪');
        message.react('🇸');
        message.react('❓');
    } if(message.content.toLowerCase().includes('cool')){
        message.react('😎');
    } if(message.content.toLowerCase().includes('yes')){
        message.react('✔️');
    } if(message.content.toLowerCase().includes('no')){
        message.react('❌');
    } if(message.content.toLowerCase().includes('nerd')){
        message.react('🤓');
    } if(message.content.toLowerCase().includes('cowboy')||message.content.toLowerCase().includes('yeehaw')){
        message.react('🤠');
    } if(message.content.toLowerCase().includes('```js')){
        message.react('792333914727383040');
    } if(message.content.toLowerCase().includes('```java')){
        message.react('792334301856399381');
    } if(message.content.toLowerCase().includes('sad')||message.content.toLowerCase().includes('cry')){
        message.react('😭');
    } if(message.content.toLowerCase().includes('love')||message.content.toLowerCase().includes('care')){
        message.react('❤️');
    } if(message.content.toLowerCase().includes('gross')||message.content.toLowerCase().includes('eww')
        ||message.content.toLowerCase().includes('nasty')){
        message.react('🤮');
    } if(message.content.toLowerCase().includes('recommendation')){
        message.react('✔️');
        message.react('❌');
    } 
    
    if(message.channel.type === "dm") return;
    var prefix = db.fetch(`${message.guild.id}prefix`) || prefix;
    if(prefix === null||prefix===undefined){
        prefix = '+';
    }

    if(!message.content.startsWith(prefix) || message.author.bot) return;
    if(!message.member) message.member = await message.guild.fetchMember(mess);

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(message.guild === null){
        message.channel.send('owo no dm commands sorry');
    } else {
    if(command === 'prefix'){
        client.commands.get('prefix').execute(message, args);
    } else if(command == 'help'){
        client.commands.get('help').execute(client ,message, args);
    } else if(command == 'mute'){
        client.commands.get('mute').execute(message, args); 
    } else if(command == 'timedmute'){
        client.commands.get('timedmute').execute(message, args); 
    } else if(command == 'unmute'){
        client.commands.get('unmute').execute(message, args);
    } else if(command == 'makeabot'){
        client.commands.get('makeabot').execute(message, args);
    } else if(command == 'delete'){
        client.commands.get('delete').execute(message, args);
    } else if(command == 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if(command == 'ban'){
        client.commands.get('ban').execute(message, args);
    } else if(command == 'servers'){
        message.channel.send(`I'm in ${client.guilds.cache.size} servers!`);
    } else if(command == 'inviteme'){
        client.commands.get('inviteme').execute(message, args);
    } else if(command == 'rolldice'){
        client.commands.get('rolldice').execute(message, args);
    } else if(command == 'addrole'){
        client.commands.get('addrole').execute(message, args);
    } else if(command == 'pfp' || command == 'avatar' || command == 'av'){
        client.commands.get('pfp').execute(message, args);
    } else if (command === 'listemojis') {
        client.commands.get('listEmojis').execute(message, args);
    } else if(command === 'senddm'){
        client.commands.get('sendDm').execute(message,args);
    } else if(command === 'dmMe'){
        client.commands.get('dmMe').execute(message, args);
    } else if(command === 'randomMessage'){
        client.commands.get('randomMessage').execute(message, args);
    } else if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if(command == 'youtube'){
        client.commands.get('youtube').execute(message, args);
    } else if(command == 'dungeondestiny'){
        client.commands.get('dungeondestiny').execute(message, args);
    } else if(command == 'voteme'){
        client.commands.get('voteme').execute(message, args);
    } else if(command == 'recommend'){
        client.commands.get('recommend').execute(message, args);
    }
    }
} catch (err){
    message.channel.send('Invalid or incomplete command. Try `+help` for more info.\n||' + err + '||');
} 
});
()#*#)$*&(&)(#$(%)&()#&$(%))

client.on("guildCreate", guild => {
    let channelID;
    let channels = guild.channels.cache;

    channelLoop:
    for (let key in channels) {
        let c = channels[key];
        if (c[1].type === "text") {
            channelID = c[0];
            break channelLoop;
        }
    }

    let channel = guild.channels.cache.get(guild.systemChannelID || channelID);
    channel.send(`Hey thanks for inviting me ❤\nTo view my commands just do +help! My prefix is changable as well!.\n
                If you'd like to suggest any new changes, add-ons, or need help please join the following server!\n
                https://discord.gg/bR4R4PE6a4\n
                Like our bot upvote us here ~> COMING SOON`);
});

client.login("Nzg0OTk0NTU3NDg5MTg0Nzc5.X8xZJg.TEaYgpwWLgQq1W6irzJ7avlc2E0");