const Message = require('./message-shooter')

module.exports = (client) => {
  const channelId = '465974772828864532'

  const getEmoji = (emojiName) =>
    client.emojis.cache.find((emoji) => emoji.name === emojiName)

  const emojis = {
    R6: 'Rainbow Six Siege',
    CSGO: 'CS:GO',
    Overwatch: 'Overwatch',
    GhostRecon: 'Ghost Recon',
    Battlefield: 'Battlefield',
    Halo: 'Halo',
    COD: 'Call of Duty',
    StarWars: 'Star Wars',
    Valorant: 'Valorant',
    Tarkov: 'Escape from Tarkov',
    PlanetSide2: 'PlanetSide 2',
  }

  const reactions = []

  let emojiText = '‏‏‎_ _\n**Shooter [1/2]**\n'
  for (const key in emojis) {
    const emoji = getEmoji(key)
    reactions.push(emoji)

    const role = emojis[key]
    emojiText += `${emoji} = ${role}\n`
  }

  Message(client, channelId, emojiText, reactions)

  const handleReaction = (reaction, user, add) => {
    if (user.id === '773249128117436428') {
      return
    }

    const emoji = reaction._emoji.name

    const { guild } = reaction.message

    const roleName = emojis[emoji]
    if (!roleName) {
      return
    }

    const role = guild.roles.cache.find((role) => role.name === roleName)
    const member = guild.members.cache.find((member) => member.id === user.id)

    if (add) {
      member.roles.add(role)
    } else {
      member.roles.remove(role)
    }
  }

  client.on('messageReactionAdd', (reaction, user) => {
    if (reaction.message.channel.id === channelId) {
      handleReaction(reaction, user, true)
    }
  })

  client.on('messageReactionRemove', (reaction, user) => {
    if (reaction.message.channel.id === channelId) {
      handleReaction(reaction, user, false)
    }
  })
}
