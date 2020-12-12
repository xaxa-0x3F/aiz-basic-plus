module.exports = async (client) =>{
    const guild = client.guilds.cache.get('786478743748345878');
    setInterval(()=>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('786999792860921917');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
    }, 900000);
}