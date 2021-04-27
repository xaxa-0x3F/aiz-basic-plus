const Discord = require('discord.js')
const config = require('./config.json');
const { DiscordUNO } = require('discord-uno');
const client = new Discord.Client({
    ws: {
      intents: Discord.Intents.ALL
    }
}); 

const RegisterCommands = require('./Registry/registerCommands');
const registerCmds = new RegisterCommands('./commanders', ['general', 'moderation', 'music', 'games'], client);

const RegisterEvents = require('./Registry/registerEvents');
const registerEvents = new RegisterEvents('./events', client);

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

require('./database/database');

registerEvents.init();
registerCmds.init();
client.discordUNO = new DiscordUNO('#FFB6C1');
client.commands = new Discord.Collection();
client.commanders = new Discord.Collection();
client.aliases = new Discord.Collection();

client.login(config.token);