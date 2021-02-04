const Message = require('./message-footer')

module.exports = (client) => {
  const channelId = '465974772828864532'

  let Text = '_ _\nIf your role is not automatically assigned please drop a message in <#285362769908203521> with the games you would like to be assigned to!'

  Message(client, channelId, Text)
}
