const Discord = require('discord.js')
const config = require('./config.json');
const fs = require('fs');
const command = require('./command');
const db = require('quick.db');
const fetch = require("node-fetch"); 
const atob = require('atob');
const memberCounter = require('./counters/member-counter');
const client = new Discord.Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    diasbleEveryone: true
});
const Timeout = new Set();
const ms = require('ms');
const { setTimeout } = require('timers');
const RandomReddit = require('random-reddit');
var discordservers = [];

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

    command(client, ['cc', 'clearchannel'], (message)=> {
        if(message.member.hasPermission('ADMINISTRATOR')){
            message.channel.messages.fetch().then((results) => {
                message.channel.bulkDelete(results);
            });
            message.channel.send('deleting as many messages as I can ❤');
        } else {
            return;
    }
    
    });

    /*await mongo().then(mongoose => {
        try{
            console.log('connect to mongoose!')
        } finally {
            mongoose.connection.close()
        }
    }); */
});

//blacklisted words filter
console.log("Hello world ~ AIS");

client.on('message', async message =>{
    //In message event:
    if(message.channel.type === "dm") return;
    
    var recommendChannel = db.fetch(`${message.guild.id}recommnedChannel`);
    var prefix = db.fetch(`${message.guild.id}prefix`) || prefix;
    if(prefix === null){
        prefix = '+';
    }

    //if (message.author.bot || message.channel.type === 'dm') return;
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

    //React to messages if they include a certain phrase!
    if(message.content.toLowerCase().includes('@everyone')){
        message.react('🇾');
        message.react('🇪');
        message.react('🇸');
        message.react('❓');
    } if(message.content.toLowerCase().includes('cool')){
        message.react('😎');
    }

    //Stop errors from happening or unlimited replies to a bot.
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    if(!message.member) message.member = await message.guild.fetchMember(mess);

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //Start command fetching some are in a command handler some aren't :)
    if(message.guild === null){
        message.channel.send('owo no dm commands sorry');
    } else{
    if(command === 'prefix'){
        if(message.member.permissions.has("ADMINISTRATOR")){
        db.set(`${message.guild.id}prefix`, args[0])
        return message.reply('My prefix is now `' + args[0] + '`    👏 👏 👏') 
        } else {
            message.channel.send('You must be an admin to change the prefix 😢');
                }
    } else if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if(command == 'youtube'){
        client.commands.get('youtube').execute(message, args);
    } else if(command == 'dungeondestiny'){
        client.commands.get('dungeondestiny').execute(message, args);
    } else if(command == 'mute'){
        client.commands.get('mute').execute(message, args); 
    } else if(command == 'timedmute'){
        client.commands.get('timedmute').execute(message, args); 
    } else if(command == 'unmute'){
        client.commands.get('unmute').execute(message, args);
    } else if(command == 'makeabot'){
        client.commands.get('makeabot').execute(message, args);
    } else if(command == 'help'){
        client.commands.get('help').execute(client ,message, args);
    } else if(command == 'delete'){
        client.commands.get('delete').execute(message, args);
    } else if(command == 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if(command == 'ban'){
        client.commands.get('ban').execute(message, args);
    } /* else if(command == 'reactionrole'){
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    } */ else if(command == 'servers'){
        message.channel.send(`I'm in ${client.guilds.cache.size} servers!`);
    } else if(command == 'inviteme'){
        client.commands.get('inviteme').execute(message, args);
    } else if(command == 'abbey'){
        client.commands.get('abbey').execute(message, args);
    } else if(command == 'rolldice'){
        client.commands.get('rolldice').execute(message, args);
    } else if(command == 'addrole'){
        client.commands.get('addrole').execute(message, args);
    } else if(command == 'pfp' || command == 'avatar' || command == 'av'){
        client.commands.get('pfp').execute(message, args);
    } /*else if(command == 'randomReddit' || command == 'randomreddit' || command == 'randomr'){
        client.commands.get('randomReddit').execute(message, args);
    }  else if (command == 'muteAll') {
        let channel = message.guild.channels.cache.find(channel => channel.toString() === args[0]);
        channel.join().then(connection => {
            // Yay, it worked!
            message.channel.send("Successfully connected.");
            for (let member of channelToSend.members) {
                member[1].setMute(true)
            }
        });
    } else if (command == 'unmuteAll') {
        let channel = message.guild.channels.cache.find(channel => channel.toString() === args[0]);
        channel.join().then(connection => {
            // Yay, it worked!
            message.channel.send("Successfully connected.");
            for (let member of channelToSend.members) 
                member[1].setMute(false)
            }
        });
    } */else if (command === 'listemojis') {
        try{
        const emojiList = message.guild.emojis.cache.map(e=>e.toString()).join(" ");
            message.channel.send(emojiList, { split: true });
        } catch(err){
            message.channel.send('You have no custom server emojis :(' + '||' + err + '||')
        }
      } else if (command === 'reactionrole'){
            db.set(`${message.guild.id}channel`, args[0])
            let channelToSend = message.guild.channels.cache.find(channel => channel.toString() === args[0]);
            db.set(`${message.guild.id}role`, args[3])
            //let Role = message.guild.roles.cache.find(role => role.name === args[3]);

            //const newbieRole = message.guild.roles.cache.find(role => role.name === args[4]);
            
            db.set(`${message.guild.id}emoji`, args[2])
            //let Emoji = message.guild.emojis.cache.get(emoji => emoji.toString() === args[2].name);
            db.set(`${message.guild.id}message`, args[1])
            channelToSend.send(args[1])
            let msg = await channelToSend.send(args[1])
            msg.react(args[2])
            //console.log(db.set(`${message.guild.id}emoji`, args[0]));
            //messageEmbed.react(Emoji);
      } else if(command === 'senddm'){
        let target = message.mentions.users.first();
        target.send(args.slice(0).join(' '));
      } else if(command === 'dmMe'){
        message.author.send(args.slice(0).join(' '));
      } else if(command === 'randomMessage'){
        var rando = channel.messages.cache.random();
        message.channel.send(`${rando}`);
      } else if(command === 'setRecommendChannel'){
        if(message.member.permissions.has("ADMINISTRATOR")){
            message.guild.channels.cache.find(channel => channel.toString() === args[0]);
            db.set(`${message.guild.id}recommendationChannel`, args[0])
            return message.reply('The recommendation channel is now `' + args[0] + '`    👏 👏 👏') 
            } else {
                message.channel.send('You must be an admin to change the recommendation channel 😢');
            }
      } else if(command === 'recommend'){
        if(recommendChannel===null){
            message.reply('There is not a setup recommendation channel.');
        }
        else if(recommendChannel!==null){
        const newEmbedddd = new Discord.MessageEmbed()
        .setColor('#FFB6C1')
        .setTitle(`Reccomendation by ${message.author}`)
        .setDescription(args.slice(0).join(' '))
        .setFooter('Vote ✔️ or ❌');
        recommendChannel.send(newEmbedddd);
        sentMessage.react('✔️', '❌');
        }
      }
    }
} catch (err){
    message.channel.send('Invalid or incomplete command. Try `+help` for more info.\n||' + err + '||');
} 
});
//hmmm
/*
client.on('messageReactionAdd', async (reaction, user, message) => {
    var channelToSend = db.fetch(`${message.guild.id}channel`);
    var Emoji = db.fetch(`${message.guild.id}emoji`);
    var Role = db.fetch(`${message.guild.id}role`);
    //var message = db.fetch(`${message.guild.id}message`);
    if(reaction.message.partial) await reaction.message.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.channel.id == channelToSend){
        if(reaction.emoji.name === Emoji){
            await reaction.message.guild.members.cache.get(user.id).roles.add(Role);
        }
    } else {
        return;
    }
});
client.on('messageReactionRemove', async (reaction, user, message) => {
    var channelToSend = db.fetch(`${message.guild.id}channel`);
    var Emoji = db.fetch(`${message.guild.id}emoji`);
    var Role = db.fetch(`${message.guild.id}role`);
    //var message = db.fetch(`${message.guild.id}message`);
    if(reaction.message.partial) await reaction.message.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.channel.id == channelToSend){
        if(reaction.emoji.name === Emoji){
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Role);
        }
    } else {
        return;
    }
});
*/

/* client.on('guildMemberAdd', guildMember =>{
    guildMember.guild.channels.cache.get('785642283919474708').send(`Welcome <@${guildMember.user.id}> to our server!`);
}); */

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

client.login("Nzg0OTk0NTU3NDg5MTg0Nzc5.X8xZJg.3IaX5nEiPWbLqw4VHgDUYl8Ybxk");