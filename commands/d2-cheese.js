const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    //We have to set a argument for the help command beacuse its going to have a seperate argument.
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);
    const channelID = '466966281837608960';

    //Custom Help command by using the second argument.
    if (message.channel.id === channelID) {
        if(helpArgs[0] === '101') {
            const embed = new Discord.MessageEmbed()
            .setAuthor('Cheesing in Destiny 2')
            .setDescription('The YouTuber [Cheese Forever](https://www.youtube.com/c/CheeseForever/) is the go to place to learn about the latest cheeses in Destiny 2.')
            .setColor('#ffcc00')
            .setThumbnail('https://destiny2.falcon-gaming.net/wp-content/uploads/cheesing/Cheese_Icon.png')
            .setImage('https://destiny2.falcon-gaming.net/wp-content/uploads/cheesing/Cheesing101.png')
            .setTimestamp()
            message.channel.send(embed);
        }
    }

    //Custom Help command by using the second argument.
    if (message.channel.id === channelID) {
        if(helpArgs[0] === 'GhostLobby') {
            const embed = new Discord.MessageEmbed()
            .setAuthor('Cheesing in Destiny 2')
            .addFields(
                { name: 'Example Ghost lobby in D1', value: '[Watch video](https://www.youtube.com/watch?v=3w6A_ctkhEo)'},
                { name: 'Example Ghost lobby in D2', value: '[Watch video](https://www.youtube.com/watch?v=92-SDZ4SR5Q)'}
            )
            .setColor('#ffcc00')
            .setThumbnail('https://destiny2.falcon-gaming.net/wp-content/uploads/cheesing/Cheese_Icon.png')
            .setImage('https://destiny2.falcon-gaming.net/wp-content/uploads/cheesing/GhostLobbies.png')
            .setTimestamp()
            message.channel.send(embed);
        }
    }

    //Custom Help command by using the second argument.
    if (message.channel.id === channelID) {
        if(helpArgs[0] === 'Trials') {
            const embed = new Discord.MessageEmbed()
            .setAuthor('Cheesing in Destiny 2')
            .addFields(
                { name: 'Example Ghost lobby in D1', value: '[Watch video](https://www.youtube.com/watch?v=3w6A_ctkhEo)'},
                { name: 'Example Ghost lobby in D2', value: '[Watch video](https://www.youtube.com/watch?v=92-SDZ4SR5Q)'}
            )
            .setColor('#ffcc00')
            .setThumbnail('https://destiny2.falcon-gaming.net/wp-content/uploads/cheesing/Cheese_Icon.png')
            .setImage('https://destiny2.falcon-gaming.net/wp-content/uploads/cheesing/GhostLobbies.png')
            .setTimestamp()
            message.channel.send(embed);
        }
    }

    //Custom Help command by using the second argument.
    if (message.channel.id === channelID) {
        if(helpArgs[0] === 'Discords') {
            const embed = new Discord.MessageEmbed()
            .setAuthor('Cheesing in Destiny 2')
            .addFields(
                { name: 'Example Ghost lobby in D1', value: '[Watch video](https://www.youtube.com/watch?v=3w6A_ctkhEo)'},
                { name: 'Example Ghost lobby in D2', value: '[Watch video](https://www.youtube.com/watch?v=92-SDZ4SR5Q)'}
            )
            .setColor('#ffcc00')
            .setThumbnail('https://destiny2.falcon-gaming.net/wp-content/uploads/cheesing/Cheese_Icon.png')
            .setImage('https://destiny2.falcon-gaming.net/wp-content/uploads/cheesing/GhostLobbies.png')
            .setTimestamp()
            message.channel.send(embed);
        }
    }

    //Custom Help command by using the second argument.
    if (message.channel.id === channelID) {
        if(helpArgs[0] === 'OOB') {
            const embed = new Discord.MessageEmbed()
            .setAuthor('Cheesing in Destiny 2')
            .addFields(
                { name: 'Example Ghost lobby in D1', value: '[Watch video](https://www.youtube.com/watch?v=3w6A_ctkhEo)'},
                { name: 'Example Ghost lobby in D2', value: '[Watch video](https://www.youtube.com/watch?v=92-SDZ4SR5Q)'}
            )
            .setColor('#ffcc00')
            .setThumbnail('https://destiny2.falcon-gaming.net/wp-content/uploads/cheesing/Cheese_Icon.png')
            .setImage('https://destiny2.falcon-gaming.net/wp-content/uploads/cheesing/GhostLobbies.png')
            .setTimestamp()
            message.channel.send(embed);
        }
    }

    //Normal usage of (prefix)help without any args. (Shows all of the commands and you should set the commands yourself)
    if (message.channel.id === channelID) {
    if(!helpArgs[0]) {
        const embed = new Discord.MessageEmbed()
        .setAuthor('Cheesing in Destiny 2')
        .setDescription('The following parameters can be used to learn more about specific aspects of cheesing within Destiny 2')
        .setColor('#ffcc00')
        .setThumbnail('https://destiny2.falcon-gaming.net/wp-content/uploads/cheesing/Cheese_Icon.png')
        .addFields(
            { name: '101', value: 'Learn about the cheesing culture in Destiny 2'},
            { name: 'GhostLobby', value: 'Learn about ghost lobbies'},
            { name: 'Trials', value: 'Learn about how to do ghost lobbies in trials'},
            { name: 'Discords', value: 'Learn about discord communities dedicated to cheesing.'},
            { name: 'OOB', value: 'Learn about the practicve of going Out of Bounds.'}
        )
        .setTimestamp()
        message.channel.send(embed);}
    }
}    

module.exports.config = {
    name: "cheese",
    description: "Supports the following parameters (101, GhostLobby)",
    usage: "!cheese || !cheese <param>",
    accessableby: "Members",
    aliases: []
}