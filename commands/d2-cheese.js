const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    //We have to set a argument for the help command because its going to have a seperate argument.
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);
    const channelID = '466966281837608960';

    // 101
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

    // Ghost Lobby
    if (message.channel.id === channelID) {
        if(helpArgs[0].toString().toLowerCase() === 'ghostlobby') {
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

    // Trials
    if (message.channel.id === channelID) {
        if(helpArgs[0].toString().toLowerCase() === 'trials') {
            const embed = new Discord.MessageEmbed()
            .setAuthor('Cheesing in Destiny 2')
            .setDescription('Trials Cheesing can be accomplished on any platform. It is most successfully done on platforms with lower number of players in the matchmaking pool (e.g. Stadia)')
            .setColor('#ffcc00')
            .setThumbnail('https://destiny2.falcon-gaming.net/wp-content/uploads/cheesing/Cheese_Icon.png')
            .setImage('https://destiny2.falcon-gaming.net/wp-content/uploads/cheesing/TrialsCheese.png')
            .setTimestamp()
            message.channel.send(embed);
        }
    }

    // OOB
    if (message.channel.id === channelID) {
        if(helpArgs[0].toString().toLowerCase() === 'oob') {
            const embed = new Discord.MessageEmbed()
            .setAuthor('Cheesing in Destiny 2')
            .setDescription('The YouTuber [Froggy618157725](https://www.youtube.com/channel/UCtEvLS7_ks-k-dB3_ebjgPw) is one of the best people to watch to learn about OOBing in Destiny 2.')
            .setColor('#ffcc00')
            .setThumbnail('https://destiny2.falcon-gaming.net/wp-content/uploads/cheesing/Cheese_Icon.png')
            .setImage('https://destiny2.falcon-gaming.net/wp-content/uploads/cheesing/OOB.png')
            .setTimestamp()
            message.channel.send(embed);
        }
    }

    // Discords
    if (message.channel.id === channelID) {
        if(helpArgs[0].toString().toLowerCase() === 'discords') {
            const embed = new Discord.MessageEmbed()
            .setAuthor('Cheesing in Destiny 2')
            .setDescription('There are many Discord Communities that help players find like minded people to cheese with. Most of them are private due to constant raids/distruption by trolls. The following Discords are compliant with Bungie/Discord/Steam ToS, and are recommended by Falcon Gaming.')
            .addFields(
                { name: 'RaidSecrets', value: 'The official Discord of /r/RaidSecrets. Mostly Encounter/Boss Mechanic Cheeses, Loadout Exploits, OOBs, and Datamining. [Discord Invite](https://discord.gg/KPvx6xxHdz)'},
                { name: 'Host Haven', value: 'One of the largest, oldest, and most extremely well organized communities dedicated to PVP related cheesing activities. It has constantly been a target of toxic influencers, and is an invite only Discord. Falcon Gaming has partnered with Host Haven to give our members exclusive access to this community. DM a Destiny 2 Moderator for a one time invite link.'},
                { name: 'Triumph Cheesing', value: 'As the name suggests, this is a Steam based community dedicated to helping players cheese hard to earn triumphs. [Discord Invite](https://discord.gg/fuxUKEqvWn)'}
            )
            .setColor('#ffcc00')
            .setThumbnail('https://destiny2.falcon-gaming.net/wp-content/uploads/cheesing/Cheese_Icon.png')
            .setFooter('If an invite link has expired please let a moderator know.')
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
            { name: 'GhostLobby', value: 'Learn about Ghost Lobbies'},
            { name: 'Trials', value: 'Learn about how to do Ghost Lobbies in Trials'},
            { name: 'OOB', value: 'Learn about the practice of going Out of Bounds.'},
            { name: 'Discords', value: 'Learn about Discord communities dedicated to cheesing.'}
        )
        .setTimestamp()
        message.channel.send(embed);
        }
    }
}    

module.exports.config = {
    name: "cheese",
    description: "Supports the following parameters (101, GhostLobby)",
    usage: "!cheese || !cheese <param>",
    accessableby: "Members",
    aliases: []
}