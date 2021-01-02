const { execute } = require("./play");

module.exports = {
    name: 'leave',
    description: 'Makes the bot leave/stop the music.',
    async execute(message, args){
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send('You need to be in a voice channel to stop the music ❤');
        await voiceChannel.leave();
        await message.channel.send('Stopping music and leaving the voice channel ❤');

        
    }
}