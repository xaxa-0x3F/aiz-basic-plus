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
    if(message.guild === null || message.guild === undefined){
        return;
    } 
    if(message.channel.type === "dm") return;
    
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
    var reactionz = db.fetch(`${message.guild.id}reactionz`);
    if(reactionz == null || reactionz == undefined){
        reactionz = 'on';
    }
    if(reactionz == 'on'){
    if(message.content.toLowerCase().includes('@everyone')){
        message.react('🇾');
        message.react('🇪');
        message.react('🇸');
        message.react('❓');
    } if(message.content.toLowerCase().includes('cool')){
        message.react('😎');
    } if(message.content.toLowerCase().includes('nerd')){
        message.react('🤓');
    } if(message.content.toLowerCase().includes('cowboy')||message.content.toLowerCase().includes('yeehaw')){
        message.react('🤠');
    } if(message.content.toLowerCase().includes('```js')){
        message.react('<:javascript:788861893472419861>');
    } if(message.content.toLowerCase().includes('```java')){
        message.react('<:java:788861893707956234>');
    } if(message.content.toLowerCase().includes('```python')){
        message.react('<:python:788861893040930908>');
    } if(message.content.toLowerCase().includes('vs code') || message.content.toLowerCase().includes('visual studio')){
        message.react('<:vsCode:791963040069320724>');
    } if(message.content.toLowerCase().includes('sad')||message.content.toLowerCase().includes('cry')){
        message.react('😭');
    } if(message.content.toLowerCase().includes('love')||message.content.toLowerCase().includes('care')){
        message.react('<a:dokdokihorihori:788861893572952064>');
    } if(message.content.toLowerCase().includes('bruh')||message.content.toLowerCase().includes('nut')){
        message.react('<a:nut:788865884957442108>');
    } if(message.content.toLowerCase().includes('weeb')||message.content.toLowerCase().includes('otaku')){
        message.react('<:weeb:784855468089540628>');
    } if(message.content.toLowerCase().includes('gross')||message.content.toLowerCase().includes('eww')||message.content.toLowerCase().includes('nasty')){
        message.react('🤮');
    } if(message.content.toLowerCase().includes('recommendation')){
        message.react('✔️');
        message.react('❌');
    } if(message.content.toLowerCase().includes('im out') || message.content.toLowerCase().includes('bye')){
        message.react('<a:imOut:788861895796719636>');
    } if(message.content.toLowerCase().includes('baka') || message.content.toLowerCase().includes('idiot')){
        message.react('<:baka:784855468115886131>');
    } if(message.content.toLowerCase().includes('uwu')){
        message.react('<a:NeonUWU:788861893338857503>');
    } if(message.content.toLowerCase().includes('simp')){
        message.react('<:simpPills:791963039926190101>');
    } if(message.content.toLowerCase().includes('codeasaurous')){
        message.react('<:dino:783725870446805014>');
    } if(message.content.toLowerCase().includes('sip')){
        message.react('<a:sip:788865883819737109>');
    } if(message.content.toLowerCase().includes('satan') ||message.content.toLowerCase().includes('you need jesus')){
        message.react('<:crosspeepo:784855910085427210>');
    } if(message.content.toLowerCase().includes('thighs')){
        message.react('<:thickThighs:788861893363367948>');
    } if(message.content.toLowerCase().includes('racist')||message.content.toLowerCase().includes('nigga')){
        message.react('<:racist:791963039946637312>');
    } if(message.content.toLowerCase().includes('triggered')){
        message.react('<:Dead_Triggered:788861893770084402>');
    } if(message.content.toLowerCase().includes('dead chat') || message.content.toLowerCase().includes('chat is dead')){
        message.react('<:deadChat:791963039745310740>');
    } if(message.content.toLowerCase().includes('wink') || message.content.includes(';)')){
        message.react('<a:chikaWink1:791961623693885450>');
    } if(message.content.toLowerCase().includes('baby yoda')){
        message.react('<:babyyoda:784855910060654592>');
    } if(message.content.toLowerCase().includes('mods') && message.content.toLowerCase().includes('gay')){
        message.react('<a:gaymods:784855468177621023>');
    } if(message.content.toLowerCase().includes('nope')){
        message.react('<a:finger_wave:788861893648973844>');
    } if(message.content.toLowerCase().includes('stonks')){
        message.react('<:stonks:791963039997362197>');
    } if(message.content.toLowerCase().includes('nervous') || message.content.toLowerCase().includes('sweat')){
        message.react('<a:sweat:784855468413026375>');
    } if(message.content.toLowerCase().includes('chika')){
        message.react('<a:chikaBOP1:791961623971364874>');
    } if(message.content.toLowerCase().includes('asuna')){
        message.react('<:asuna2:784855469311131649>');
    } if(message.content.toLowerCase().includes('bop')){
        message.react('<a:bop:788861894756532236>');
    }}
    
    var prefix = db.fetch(`${message.guild.id}prefix`) || prefix;
    if(prefix === null||prefix===undefined){
        prefix = '+';
    }

    if(!message.content.startsWith(prefix) || message.author.bot) return;
    if(!message.member) message.member = await message.guild.fetchMember(mess);

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

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
    } else if(command == 'reacton'){
        client.commands.get('reacton').execute(message, args);
    } else if(command == 'reactoff'){
        client.commands.get('reactoff').execute(message, args);
    } else if(command == 'servers'){
        const newEmbeddd = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setTitle('Thanks for considering voting!')
        .setDescription(`I'm in ${client.guilds.cache.size} servers!`);

        message.channel.send(newEmbeddd);
    } else if(command == 'inviteme'){
        client.commands.get('inviteme').execute(message, args);
    } else if(command == 'rolldice'){
        client.commands.get('rolldice').execute(message, args);
    } else if(command == 'addrole'){
        client.commands.get('addrole').execute(message, args);
    } else if(command == 'pfp' || command == 'avatar' || command == 'av'){
        client.commands.get('pfp').execute(message, args);
    } else if (command === 'listemojis') {
        client.commands.get('listemojis').execute(message);
    } else if(command === 'senddm'){
        client.commands.get('sendDm').execute(message,args);
    } else if(command === 'dmMe'){
        client.commands.get('dmMe').execute(message, args);
    } else if(command === 'randommessage'){
        client.commands.get('randommessage').execute(message);
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
    } else if(command == 'play'){
        client.commands.get('play').execute(message, args);
    } else if(command == 'leave'){
        client.commands.get('leave').execute(message, args);
    }
} catch (err){
    message.channel.send('Invalid or incomplete command. Try `+help` for more info❤\n||' + err + '||');
}
});


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
                Like our bot upvote us here ~>\m
                https://top.gg/bot/784994557489184779`);
});

client.login("Nzg0OTk0NTU3NDg5MTg0Nzc5.X8xZJg.TEaYgpwWLgQq1W6irzJ7avlc2E0");