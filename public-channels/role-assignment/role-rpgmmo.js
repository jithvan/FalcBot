const Message = require('./message-rpgmmo')

module.exports = (client) => {
  const channelId = '465974772828864532'

  const getEmoji = (emojiName) =>
    client.emojis.cache.find((emoji) => emoji.name === emojiName)

  const emojis = {
    GenshinImpact: 'Genshin Impact',
    Pokemon: 'Pokémon',
    ESO: 'Elder Scrolls Online',
    Cyberpunk2077: 'Cyberpunk 2077',
    EliteDangerous: 'Elite Dangerous',
    DarkSouls : 'Dark Souls',
    StarCitizen : 'Star Citizen',
    FinalFantasy : 'Final Fantasy',
    NewWorld : 'New World',
    BitCraft : 'BitCraft',
    LostArk : 'Lost Ark',
    EldenRing : 'Elden Ring',
    TowerOfFantasy : 'Tower Of Fantasy',
    DiabloIV : 'Diablo IV',
  }

  const reactions = []

  let emojiText = '‏‏‎_ _‎\n**‎‏‏‎MMO/RPG**\n'
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
