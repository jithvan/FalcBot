const addReactions = (message, reactions) => {
  message.react(reactions[0])
  reactions.shift()
  if (reactions.length > 0) {
    setTimeout(() => addReactions(message, reactions), 750)
  }
}

module.exports = async (client, channelId, text, reactions = []) => {
  const channel = await client.channels.fetch(channelId);

  if (!text || typeof text !== 'string') return;

  try {
    const message = await channel.messages.fetch('806691325633364010');

    // Make sure the bot owns the message
    if (message.author.id !== client.user.id) return;

    await message.edit({ content: text });
  } catch (err) {
    // Message doesn't exist → send a new one
    const sent = await channel.send({ content: text });

    // Optional: save sent.id somewhere instead of hardcoding
    console.log('New message sent:', sent.id);
  }
};
