module.exports = async (client) =>{
    const guild = client.guilds.cache.get('773052031514312704');
    setInterval(()=>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('836782113931001876');
        channel.setName(`🌁 -total-members-${memberCount.toLocaleString()}`);
    }, 900000);
}