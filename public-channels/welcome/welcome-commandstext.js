const Message = require('./message-commandstext')

module.exports = (client) => {
  const channelId = '375735559651328002'

  let Text = 'Our server is home to <@&804096832380600332>, who will assist you in our server. Use the `!help` command in <#465920602683867136> to see what commands are available.\nWe also use <@&443544375172268033> to record member levels and send stream notifications.\nWe have a music bot which supporters can use:\n<@&807474832873881610> | Prefix `;;`\nGame specific channels may have their own bots.\n\n***Thank you for taking the time to read our welcome channel!***'

  Message(client, channelId, Text)
}
