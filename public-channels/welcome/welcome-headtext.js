const Message = require('./message-headtext')

module.exports = (client) => {
  const channelId = '375735559651328002'

  let Text = '**Welcome to the Falcon Gaming Community Discord Server!** \nHere you can meet up with gamers from all over the world, discuss various topics, find teammates and make new friends!  We have multiple channels and voice rooms to make finding a team simple and quick. \nHere is our permanent Discord link, you can use to share our server with your friends: https://discord.gg/falcon'

  Message(client, channelId, Text)
}
