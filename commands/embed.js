const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    //We have to set a argument for the help command beacuse its going to have a seperate argument.
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    const embed = new Discord.MessageEmbed()
        .setTitle('This is a test Embed.')
        .setURL('https://www.falcon-gaming.net/')
        .setAuthor('FalcBot')
        .setDescription('This is a test Description which we will see.')
        .setColor('#FF2D00')
        .setThumbnail('https://cdn.osxdaily.com/wp-content/uploads/2016/10/YouTube-icon-full_color-610x430.png')
        .setImage('https://cdn.osxdaily.com/wp-content/uploads/2016/10/YouTube-icon-full_color-610x430.png')
        .setFooter('This is a example footer', 'https://cdn.osxdaily.com/wp-content/uploads/2016/10/YouTube-icon-full_color-610x430.png')
        .addFields(
            { name: 'Test Number 1', value: 'This is a example value', inline: true},
            { name: 'Test Number 2', value: 'This is a example value', inline: true},
            { name: 'Test Number 3', value: 'This is a example value'},
            { name: 'Test Number 4', value: 'This is a example value'}
        )
        .setTimestamp()


    message.channel.send(embed);
}

module.exports.config = {
    name: "embed",
    description: "example of an Embed.",
    usage: "!embed",
    accessableby: "Members",
    aliases: []
}