module.exports = (client) => {
  const channelId = '465920602683867136' // Welcome channel
  
  client.on('guildMemberAdd', (member) => {
    const message = `Welcome to the server, <@${member.id}>! Visit <#465974772828864532> in order to get access to specific game channels.`
    client.channels.cache.get(channelId).send(message)
  })

  client.on('guildMemberRemove', (member) => {
    const message = `**${member.user.tag}** Left the server. Bye bye!`
    client.channels.cache.get(channelId).send(message)
  })
}
  