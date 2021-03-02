module.exports = (client) => {
  const channelId = '465920602683867136' // Welcome channel
  
  client.on('guildMemberAdd', (member) => {
    const message = `Welcome to the server, <@${member.id}>! Visit <#465974772828864532> in order to get access to specific game channels. You need to have at least one role to be able to see public channels. If you don't play any of the games listed, send a message in <#285362769908203521> and we will help you out!`
    client.channels.cache.get(channelId).send(message)
  })

  client.on('guildMemberRemove', (member) => {
    const message = `**${member.user.tag}** Left the server. Bye bye!`
    client.channels.cache.get(channelId).send(message)
  })
}
  