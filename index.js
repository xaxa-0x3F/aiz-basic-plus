const Discord = require('discord.js');
//const config = require('./config.json');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const prefix = '+';
const fs = require('fs');
var discordservers = [];
const command = require('./command');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', ()=> {
    console.log("AisBasic+ is online!");

    client.user.setPresence({
        activity: {
            name: guild.name,
            type: 0,
        }
    });

    command(client, 'status', message =>{
        const content = message.content.replace('!status', '');
        const content2 = message.content.replace('!status', '');

        client.user.setPresence({
            activity: {
                name: content,
                type: content2,
            }
        });
    });
});

client.on('message', async message =>{
try{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
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
        client.commands.get('help').execute(message, args);
    } else if(command == 'delete'){
        client.commands.get('delete').execute(message, args);
    } else if(command == 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if(command == 'ban'){
        client.commands.get('ban').execute(message, args);
    } else if(command == 'reactionrole'){
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    } else if(command == 'servers'){
        let discordservers = [];
        client.guilds.cache.forEach(g => {
            discordservers.push(g.name); // use g.id for each server's id, or you can use g.name -- id: g.id
        })
        message.channel.send(`${discordservers.join('\n')}`);
    } else if(command == 'inviteme'){
        client.commands.get('inviteme').execute(message, args);
    } else if(command == 'abbey'){
        client.commands.get('abbey').execute(message, args);
    }
} catch (err){
    message.channel.send('Invalid or incomplete command. Try `+help` for more info.\n`' + err + '`');
} 
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');
    
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('785642283919474708').send(`Welcome <@${guildMember.user.id}> to our server!`);
});

//keep at end
client.login("Nzg0OTk0NTU3NDg5MTg0Nzc5.X8xZJg.yRf9_qL2hVGZ1kwUME6Ee8BXyeA");