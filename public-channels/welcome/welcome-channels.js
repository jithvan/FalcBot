const { MessageAttachment } = require('discord.js');
const Message = require('./message-channels')

module.exports = (client) => {
  const channelId = '375735559651328002'

  const Header = new MessageAttachment('assets/Channels.gif')
  let Text = Header

  Message(client, channelId, Text)
}
