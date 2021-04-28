const Discord = require("discord.js");
const BaseCommand = require("../../BaseClasses/baseCommand");
const categories = require("../../utils/categories");
const { prefix } = require("../../config.json");

module.exports = class Helppp extends BaseCommand {
  constructor() {
      super({
          aliases: ["halppp"],
          description: "Help menu for the bot",
          name: "helppp",
          permissions: ["SEND_MESSAGES"],
          usage: "helppp",
          category: "general",
      });
  }

  async run(client, message, args) {
    const gen = new Discord.MessageEmbed()
    .setColor('#FFB6C1')
    .setTitle('<a:dokdokihorihori:788861893572952064> General Commands Help <a:dokdokihorihori:788861893572952064>')
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setTimestamp()
    .setFooter('2/4 - Made by eh_asuna#0646')
    .addFields(
      {name: '**Dungeondestiny ~**', value: '**Usage:** +pfp\n**Aliases:** dd\n**Description:** Shows the user profile picture & download link'},
      {name: '**Help~**', value: 'Displays the help menu'}
    )

    message.channel.send(gen)
  }
}