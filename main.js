const Discord = require('discord.js');
//const config = require('./config.json');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const prefix = '+';
const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', ()=> {
    console.log("AisBasic+ is online!");
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
        let embed = new Discord.MessageEmbed()
        .setTitle('reaction Roles')
        .setDescription('React to gain the role!')
        .setColor('#FFB6C1')
        let msgEmbed = await message.channel.send(embed)
        msgEmbed.react('👍')
    }
} catch (err){
    message.channel.send('Invalid or incomplete command. Try `+help` for more info.\n`' + err + '`');
} 
});

client.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.channel.id === "785642283919474708" ){
        if(reaction.emoji.name === '👍'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("784960696445173762")
        }
    }
});

client.on("messageReactionRemove", async (reaction, user) =>{
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.channel.id === "785642283919474708" ){
        if(reaction.emoji.name === '👍'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("784960696445173762")
        }
    }
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');
    
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('785642283919474708').send(`Welcome <@${guildMember.user.id}> to our server!`);
});

//keep at end
client.login(config.token);