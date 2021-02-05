module.exports = async (client, id, text) => {
  const channel = await client.channels.fetch(id)

  channel.messages.fetch().then((messages) => {
    if (messages.size === 0) {
      // Send a new message
      channel.send(text)
    } else {
      // Edit the existing message
      for (const message of messages) {
        if (message[0] === '807357581558546522') {
          message[1].edit(text)
        }
      }
    }
  })
}
