const { MessageAttachment } = require('discord.js');
const Message = require('./message-head')

module.exports = (client) => {
  const channelId = '375735559651328002'

  const Header = new MessageAttachment('assets/WelcomeHeader.gif')
  let Text = Header

  Message(client, channelId, Text)
}
