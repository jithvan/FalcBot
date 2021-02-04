module.exports.run = async (client, message, args) => {
      message.reply('Sup')
}

module.exports.config = {
    name: "hello",
    description: "Answers hello",
    usage: "!hello",
    accessableby: "Members",
    aliases: []
}