const { opponent, SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const { Message, MessageEmbed } = require('discord.js');
const BaseCommand = require('../../BaseClasses/baseCommand');
const Discord = require('discord.js');

module.exports = class connect4 extends BaseCommand {
    constructor(){
        super({
            aliases: ['cc4', 'c4'],
            description: 'Play a game of connect4 with a friend.',
            name: 'connect4',
            permissions: ['SEND_MESSAGES'],
            usage: '`+connect4 <user>`',
            category: 'games'
        });
    }

    async run(client, message, args){
        const challenger = message.member;
        const opponent = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        const youEmbed = new Discord.MessageEmbed()
        .setColor('#FFB6C1').setDescription('You cannot play connect for with yourself :(');

        if(opponent == challenger){
         message.channel.send(youEmbed)
        } else {
        const opEmbed = new MessageEmbed()
        .setDescription("Please tag someone you'd like to play against");
        if(!opponent) return message.channel.send(opEmbed);

        const question = await message.channel.send(`${opponent} would you like to play connect4 against ${challenger}`);

        ['✔', '❌'].forEach(async el => await question.react(el)); 

        const filter = (reaction, user) => ['✔', '❌'].includes(reaction.emoji.name) && user.id === opponent.id

        const response = await question.awaitReactions(filter, { max: 1});

        const reaction = response.first();

        if(reaction.emoji.name === "❌") return question.edit(`Sorry ${opponent} didn't want to play connect4 :(`);
        else {

            await message.delete();
            await question.delete();

            const board = [
                ["⚪", "⚪", "⚪", "⚪", "⚪", "⚪", "⚪"],
                ["⚪", "⚪", "⚪", "⚪", "⚪", "⚪", "⚪"],
                ["⚪", "⚪", "⚪", "⚪", "⚪", "⚪", "⚪"],
                ["⚪", "⚪", "⚪", "⚪", "⚪", "⚪", "⚪"],
                ["⚪", "⚪", "⚪", "⚪", "⚪", "⚪", "⚪"],
                ["⚪", "⚪", "⚪", "⚪", "⚪", "⚪", "⚪"]
            ];

            const renderBoard = () => {
                let tempString = "";
                for(const boardSection of board){
                    tempString += `${boardSection.join("")}\n`
                }

                tempString = tempString.concat("1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣")

                return tempString;
            }

            const initialState = renderBoard(board);

            const initial = new MessageEmbed()
                .setDescription(initialState);

            const gameMessage = await message.channel.send(initial);

            ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣"].forEach(async el => gameMessage.react(el));

            const gameFilter = (reaction, user) => ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣"].includes(reaction.emoji.name) && (user.id === opponent.id) || user.id === challenger;

            const gameCollector = gameMessage.createReactionCollector(gameFilter);

            const gameData = [
                {member: challenger, playerColor: "🔴"},
                {member: opponent, playerColor: "🟡"}
            ];

            let player = 0;

            const checkFour = (a, b, c, d) => (a==b) && (b==c) && (c==d) && (a !== "⚪")

            const horizontalCheck = () => {
                for(let i=0; i < 6; i++){
                    for(let j = 0; j < 4; j++){
                        if(checkFour(board[i][j], board[i][j + 1], board[i][j + 2], board[i][j + 3])) return [
                            board[i][j], board[i][j + 1], board[i][j + 2], board[i][j + 3]
                        ];
                    }
                }
            }

            const verticalCheck = () => {
                for(let j=0; j < 7; j++){
                    for(let i = 0; i < 3; i++){
                        if(checkFour(board[i][j], board[i + 1][j], board[i + 2][j], board[i + 3][j])) return [
                            board[i][j], board[i + 1][j], board[i + 2][j], board[i + 3][j]
                        ];
                    }
                }
            }

            const diaganol1 = () => {
                for(let col = 0; col < 4; col++){
                    for(let row = 0; row < 3; row++){
                        if(checkFour(board[row][col], board[row + 1][col + 1], board[row + 2][col + 2], board[row + 3][col + 3])) return [
                            board[row][col], board[row + 1][col + 1], board[row + 2][col + 2], board[row + 3][col + 3]
                        ];
                    }
                }
            }

            const diaganol2 = () => {
                for(let col = 0; col < 4; col++){
                    for(let row =0; row > 2; row++){
                        if(checkFour(board[row][col], board[row - 1][col + 1], board[row - 2][col + 2], board[row - 3][col + 3])) return [
                            board[row][col], board[row - 1][col + 1], board[row - 2][col + 2], board[row - 3][col + 3]
                        ];
                    }
                }
            }

            const tieCheck = () => {
                let count = 0;
                for(const el of board){
                    for(const string of el){
                        if(string !== "⚪") count++;
                    }
                }
                if(count == 42) return true;
                else return false;
            }

            const checks = [horizontalCheck, verticalCheck, diaganol1, diaganol2];

            gameCollector.on("collect", (reaction, user) => {
                if(user.id == gameData[player].member.id){

                    const openSpaces = []

                    switch (reaction.emoji.name){
                        case"1️⃣":
                            for(let i = 5; i > -1; i--){
                                if(board[i][0]== "⚪") openSpaces.push({i, j: 0});
                            }
                            if(openSpaces.length == 0) return message.channel.send(`${gameData[player].member}, you can't play there.`);
                            else board[openSpaces[0].i][openSpaces[0].j] = gameData[player].playerColor;
                        break;
                        case"2️⃣":
                            for(let i = 5; i > -1; i--){
                                if(board[i][1]== "⚪") openSpaces.push({i, j: 1});
                            }
                            if(openSpaces.length == 0) return message.channel.send(`${gameData[player].member}, you can't play there.`);
                            else board[openSpaces[0].i][openSpaces[0].j] = gameData[player].playerColor;

                        break;
                        case"3️⃣":
                            for(let i = 5; i > -1; i--){
                                if(board[i][2]== "⚪") openSpaces.push({i, j: 2});
                            }
                            if(openSpaces.length == 0) return message.channel.send(`${gameData[player].member}, you can't play there.`);
                            else board[openSpaces[0].i][openSpaces[0].j] = gameData[player].playerColor;

                        break;
                        case"4️⃣":
                            for(let i = 5; i > -1; i--){
                                if(board[i][3]== "⚪") openSpaces.push({i, j: 3});
                            }
                            if(openSpaces.length == 0) return message.channel.send(`${gameData[player].member}, you can't play there.`);
                            else board[openSpaces[0].i][openSpaces[0].j] = gameData[player].playerColor;

                        break;
                        case"5️⃣":
                            for(let i = 5; i > -1; i--){
                                if(board[i][4]== "⚪") openSpaces.push({i, j: 4});
                            }
                            if(openSpaces.length == 0) return message.channel.send(`${gameData[player].member}, you can't play there.`);
                            else board[openSpaces[0].i][openSpaces[0].j] = gameData[player].playerColor;

                        break;
                        case"6️⃣":
                            for(let i = 5; i > -1; i--){
                                if(board[i][5]== "⚪") openSpaces.push({i, j: 5});
                            }
                            if(openSpaces.length == 0) return message.channel.send(`${gameData[player].member}, you can't play there.`);
                            else board[openSpaces[0].i][openSpaces[0].j] = gameData[player].playerColor;

                        break;
                        case"7️⃣":
                            for(let i = 5; i > -1; i--){
                                if(board[i][6]== "⚪") openSpaces.push({i, j: 6});
                            }
                            if(openSpaces.length == 0) return message.channel.send(`${gameData[player].member}, you can't play there.`);
                            else board[openSpaces[0].i][openSpaces[0].j] = gameData[player].playerColor;

                        break;
                        
                    }

                    if(tieCheck()){

                        const tieEmbed = new MessageEmbed()
                            .setDescription(renderBoard(board));
                        gameCollector.stop("Tie Game, GG");
                        return gameMessage.edit("Tie Game, GG", { embed: tieEmbed });
                    }

                    for(const func of checks){
                        const data = func();
                        if(data){
                            const winEmbed = new MessageEmbed()
                                .setDescription(renderBoard(board));
                            gameCollector.stop(`${gameData[player].member.id} won, GG!`);
                            return gameMessage.edit(`${gameData[player].member} has won, GG!`, { embed: winEmbed });
                        }
                    }

                    player = (player + 1) % 2;

                    const newEmbed = new MessageEmbed()
                        .setDescription(renderBoard(board));

                    gameMessage.edit(("", { embed: newEmbed}))
                }
            });
        }
        }
    }
}