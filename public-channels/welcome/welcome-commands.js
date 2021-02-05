const { MessageAttachment } = require('discord.js');
const Message = require('./message-commands')

module.exports = (client) => {
  const channelId = '375735559651328002'

  const Header = new MessageAttachment('assets/Commands.gif')
  let Text = Header

  Message(client, channelId, Text)
}
