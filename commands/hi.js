module.exports.run = async (client, message, args) => {
    return message.channel.send("Hello")
}

module.exports.config = {
    name: "hi",
    description: "",
    usage: "!hi",
    accessableby: "Members",
    aliases: ['h']
}