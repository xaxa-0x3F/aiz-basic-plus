const baseEvent = require("../BaseClasses/baseEvent");
const Discord = require('discord.js')

module.exports = class messageReactionAdd extends baseEvent {
    constructor(){
        super('messageReactionAdd');
    }

    async run(client, reaction){
      if(reaction.message.channel.id == '773052032151715846'){
        if(reaction.message.embeds[0].title.includes('Recommendation')){
          let yC = reaction.message.reactions.cache.get('👍').count;
          let nC = reaction.message.reactions.cache.get('👎').count;

          if(yC >=5){
            const oldEmbed = reaction.message.embeds[0];
            const verifiedEmbed = new Discord.MessageEmbed(oldEmbed)
            .addFields(
              { name: 'Total 👍:', value: yC, inline: true },
              { name: 'Total 👎:', value: nC, inline: true}
            ).setFooter('**Recommendation Approved**');

              reaction.message.delete();
              reaction.message.channel.send(verifiedEmbed);
          } else if(nC >=5){
              const oldEmbed = reaction.message.embeds[0];
              const deniedEmbed = new Discord.MessageEmbed(oldEmbed)
              .addFields(
              { name: 'Total 👍:', value: yC, inline: true },
              { name: 'Total 👎:', value: nC, inline: true}
              ).setFooter('**Recommendation Denied**');

              reaction.message.delete();
              reaction.message.channel.send(deniedEmbed);
          }
        }
      }
    }
}