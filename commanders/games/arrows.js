const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');

module.exports = class arrows extends BaseCommand {
    constructor(){
        super({
            aliases: ['arrow'],
            description: "Starts an arror game.",
            name: 'arrows',
            permissions: ['SEND_MESSAGES'],
            usage: '`+arrows`',
            category: 'games'
        });
    }

    async run(client, message, args){
      let score = 1;
      let image = Math.floor((Math.random() * 2) + 1);
      const left = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setImage('https://media.discordapp.net/attachments/773052032151715840/836717731222781962/unknown.png')
        .setTimestamp()
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setFooter(`Current Score: ${score}`);

      const right = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setImage('https://media.discordapp.net/attachments/773052032151715840/836717964837388309/unknown.png?width=506&height=422')
        .setTimestamp()
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setFooter(`Current Score: ${score}`);

      const finalEm = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setAuthor(message.author.tag, message.author.avatarURL());

      try{
      gogo();
      } catch (e){
        
      }

      async function gogo(){
        if(image === 1){
          const question = await message.channel.send(left.setFooter(`Current Score: ${score}`));

          ['⏪', '❤️'].forEach(async el => await question.react(el)); 
          const filter = (reaction, user) => ['⏪', '❤️'].includes(reaction.emoji.name) && (user.id == message.author.id);
          const response = await question.awaitReactions(filter, { max: 1, errors: ['time']});

          const reaction = response.first();

          if(reaction && reaction.emoji.name === '⏪'){
            score = score + 1;
            question.delete();
            image = Math.floor((Math.random() * 2) + 1);
            gogo();
          }
          else if(reaction.emoji.name !== '⏪') {
            score = 0;
            await message.delete();
            await question.delete();
            message.channel.send(finalEm.setDescription(`**${message.author.tag}**, you finished with a score of **${score}**!`))
          }
        }

        else{
          const questionn = await message.channel.send(right.setFooter(`Current Score: ${score}`));
          ['⏪', '❤️'].forEach(async el => await questionn.react(el));
          const filterr = (reaction, user) => ['⏪', '❤️'].includes(reaction.emoji.name) && (user.id == message.author.id);
          const responsee = await questionn.awaitReactions(filterr, { max: 1,  errors: ['time']});

          const reactionn = responsee.first();

          if(reactionn && reactionn.emoji.name === "❤️"){
            score = score + 1;
            questionn.delete();
            image = Math.floor((Math.random() * 2) + 1); 
            gogo();
          }
          else if(reactionn.emoji.name !== '❤️'){
            await message.delete();
            await questionn.delete();
            message.channel.send(finalEm.setDescription(`**${message.author.tag}**, you finished with a score of **${score}**!`))
          }
        }
      }
    }
}