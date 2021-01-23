const baseEvent = require('../BaseClasses/baseEvent');
const config = require('../config.json');
const db = require('quick.db');
const fs = require('fs');
const mongoose = require('mongoose');
const Levels = require('discord-xp');

Levels.setURL("mongodb+srv://asuna:65899_Bh@cluster0.qzhlg.mongodb.net/AizBasic?retryWrites=true&w=majority");

module.exports = class message extends baseEvent {
    constructor(){
        super('message');
    }

    async run(client, message){
        if(message.guild === null || message.guild === undefined){
            return;
        } 
    
        if(message.channel.type === "dm") return;
        
        /*
        var reactionz = db.fetch(`${message.guild.id}reactionz`);
        if(reactionz == null || reactionz == undefined) { reactionz = 'on' };
        */
        
            
        
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
        
        var prefix = db.fetch(`${message.guild.id}prefix`) || prefix;
        if(prefix === null||prefix===undefined){
            prefix = '+';
        }
    
        if(!message.content.startsWith(prefix) || message.author.bot) return;
        if(!message.member) message.member = await message.guild.fetchMember(mess);
    
        const argss = message.content.slice(config.prefix.length).split(' ');
        const commandd = argss.shift();
        const commandFile = client.commands.get(commandd) || client.commands.get(client.aliases.get(commandd));
    
        if(commandFile && message.content.startsWith(prefix)) commandFile.run(client, message, argss);

        const randomXp = Math.floor(Math.random() * 9) + 1;
        const hasLevelUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
        if(hasLevelUp){
            const user = await Levels.fetch(message.author.id, message.guild.id);
            const levelEmbed = new Discord.MessageEmbed()
            .setColor('	#FFC0CB')
            .setDescription(`GG, ${message.author} you're now level ${user.level}`)

            message.channel.send(levelEmbed);
        }
    
        } catch (err){
            message.channel.send('Invalid or incomplete command. Try `+help` for more info❤\n||' + err + '||');
        }
    }
}

/*
/*if (reactionz === "on"){
            if (reaction) reaction.reactions.forEach((r) => message.react(r));
        }  
        /*
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
            }
        } */