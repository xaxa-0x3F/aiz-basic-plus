const Discord = require('discord.js')
const { RandomReddit } = require('random-reddit')
 
module.exports = {
    name: 'randomReddit',
    category: 'Fun',
    description: `Retrieve a reddit post from a specified subreddit.`,
    expectedArgs: "<subreddit>",
    execute: async (message, args,) => {
        let date = new Date().toLocaleString()
        // USERNAME: Create a reddit account if you don't already have one. Input the username for that account in the username section.
        // PASSWORD: The password for the account with the username that was input above.
        // APP_ID: Create a new reddit app by scrolling to the bottom of https://www.reddit.com/prefs/apps and making a new app. Make sure to tick script. Your app ID is the string at the top left corner of the screen under "personal use script".
        // API_SECRET: This is the string above the name field called "secret".
        const reddit = new RandomReddit ({
            username: 'your reddit username',
            password: 'your reddit password',
            app_id: 'your reddit app id',
            api_secret: 'your reddit app client secret',
          
        })
        var subreddit = args[0]
        if(subreddit.includes('r/')) {
          subreddit = subreddit.replace("r/", '')
        }
        console.log(subreddit)
        var randompost = {}
        try {
        randompost = await reddit.getPost(subreddit)
        console.log(randompost)
        if(randompost.data.over_18) {
            message.reply('A post was found, but it was NSFW. I do not send NSFW posts.')
            return;
        }
        } catch(e) {
            message.reply('I couldn\'t find that subreddit.')
        }
        try {
        let embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(`${randompost.data.author}`, ('https://icons-for-free.com/iconfiles/png/512/reddit+round+icon+icon-1320190507793599697.png'))
            .setTitle(`Here's your random post from r/${subreddit}!`)
            .setDescription(`${randompost.data.title}`)
            .setImage(randompost.data.url)
            .setURL(`https://www.reddit.com${randompost.data.permalink}`)
            .setFooter(`Reddit ● ${date}`)
        message.channel.send(embed)
        } catch(e) {
            message.reply('An error occurred sending the message.')
            console.log(e)
        } finally {
            return;
        }
    
    }
}
