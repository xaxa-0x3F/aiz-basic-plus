module.exports = {
    name: 'rolldice',
    description: "this is a command that rolls a die and outputs the number.",
    execute(message, args){
        message.channel.send(`The dice rolled ${Math.floor((Math.random() * 6) + 1)};
        }!`);
    }
}
