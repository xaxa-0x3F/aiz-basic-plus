const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');

module.exports = class rolldice extends BaseCommand {
    constructor(){
        super({
            aliases: ['roll'],
            description: "SRolls a dice, 1-6",
            name: 'rolldice',
            permissions: ['SEND_MESSAGES'],
            usage: '`+rolldice`',
            category: 'general'
        });
    }

    async run(client, message, args){
        const min = args[0];
        const max = args[1];
        if(!min){
          const newEmbed = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setDescription('The dice rolled a ' + '`' + Math.floor((Math.random() * 6) + 1) + '` out of 6.');

          message.channel.send(newEmbed);
        } else if(min){
          Number(min);
          if(isNaN(min)==true){
            const newEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription('Please enter a valid number.');

            message.channel.send(newEmbed);
          } else if(isNaN(min)==false){
          const newEmbed = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setDescription('The dice rolled a ' + '`' + Math.floor((Math.random() * min) + 1) + '`'+ ` out of ${min}`);

          message.channel.send(newEmbed);
          }
        } else if(max){
          Number(max);
          if(isNaN(max)==true){
            const newEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription('Please enter a valid number.');

            message.channel.send(newEmbed);
          } else if(isNaN(max)==false){
          const newEmbed = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setDescription('The dice rolled a ' + '`' + Math.floor((Math.random() * min) + max) + '`' + ` out of ${min}`);

          message.channel.send(newEmbed);
          }
        }
    }
}