const Message = require('./message-instructions')

module.exports = (client) => {
  const channelId = '465974772828864532'

  let Text = 'React below to claim a role and to gain access to their respective channels. If you would like to remove the role, simply remove your reaction! If a role for a game you play does not exist it may mean that we do not have an official team for it, or because it is not widely played enough by members of the community to include. To see a list of all our teams visit <https://www.falcon-gaming.net/teams/>. You can also always suggest a game to be considered for a role in <#1032018181608444024>.'

  Message(client, channelId, Text)
}
