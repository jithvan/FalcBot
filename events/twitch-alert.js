const Discord = require('discord.js');
const snekfetch = require('snekfetch');

module.exports = (client) => {
    const streamer = 'falcongamingnetwork';

    const api = `https://api.twitch.tv/kraken/streams/${streamer}?client_id=${process.env.twitch_client}`;
    const channelId = '467026448234840074'
    
    snekfetch.get(api).then(r => {
        if (r.body.stream === null) {
        setInterval(() => {
            snekfetch.get(api).then(console.log(r.body))
        }, 30000); // Set to 30 seconds, less than this causes 'node socket hang up'
        } else {
        const embed = new Discord.RichEmbed()
            .setAuthor(
            `${r.body.stream.channel.display_name} is live on Twitch`,
            `${r.body.stream.channel.logo}`,
            `${r.body.stream.channel.url}`
        )
            .setThumbnail(`http://static-cdn.jtvnw.net/ttv-boxart/${encodeURI(r.body.stream.channel.game)}-500x500.jpg`)
            .addField('Stream Title', `${r.body.stream.channel.status}`, true)
            .addField('Playing', `${r.body.stream.channel.game}`, true)
            .addField('Followers', `${r.body.stream.channel.followers}`, true)
            .addField('Views', `${r.body.stream.channel.views}`, true)
            .setImage(r.body.stream.preview.large)

        return client.channels.cache.get(channelId).send({ embed });
        }
    });
}