const Message = require('./message-commandstext')

module.exports = (client) => {
  const channelId = '375735559651328002'

  let Text = 'Our server is home to <@&804096832380600332>, who will assist you in our server. Use the `!help` command in <#465920602683867136> to see what commands are available.\nWe also use <@&467191889301340180> in some game channels to handle utility roles. Make sure to check them out using this link if you want to add this bot to your own servers <https://droplet.gg/>\nWe also use <@&443544375172268033> to record member levels and send stream notifications.\nWe have four music bots which supporters can use:\n<@&557072961987936256> | Prefix `\\`\n<@&804792540469264406> | Prefix `>`\n<@&807474431953338379> | Prefix `-`\n<@&833202935181475881> | Prefix `;;`\nGame specific channels may have their own bots.\n\n***Thank you for taking the time to read our welcome channel!***'

  Message(client, channelId, Text)
}
