module.exports.run = async (bot, message, args) => {

    let replies = ["What's up bitches", "Fuck off", "What?", "...", "Die", "Wololololo", "Sup?", "I hope you die"];

    let result = Math.floor((Math.random()*replies.length));

    return message.channel.send(replies[result]);
}

module.exports.config = {
    name: "summon",
    description: "Summons the FalcBot",
    usage: "!summon",
    accessableby: "Members",
    aliases: ['spawn']
}