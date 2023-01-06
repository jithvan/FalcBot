module.exports = (client) => {
  const channelId = '465920602683867136' // Welcome channel
  
  client.on('guildMemberAdd', (member) => {
    const message = `Welcome to the server, <@${member.id}>! Feel free to introduce yourself in <#1061008501624811640>. Visit <#465974772828864532> in order to get access to specific game channels. If you need any help send a message in <#285362769908203521> and we will help you out!`
    client.channels.cache.get(channelId).send(message)
  })

  client.on('guildMemberRemove', (member) => {
    const message = `**${member.user.tag}** Left the server. Bye bye!`
    client.channels.cache.get(channelId).send(message)
  })
}
  