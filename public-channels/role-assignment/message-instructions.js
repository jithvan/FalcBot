module.exports = async (client, channelId, text, reactions = []) => {
  const channel = await client.channels.fetch(channelId);

  if (!text || typeof text !== 'string') return;

  try {
    const message = await channel.messages.fetch('806691297016152074');

    // Make sure the bot owns the message
    if (message.author.id !== client.user.id) return;

    await message.edit({ content: text });
  } catch (err) {
    // Message doesn't exist → send a new one
    //const sent = await channel.send({ content: text });

    // Optional: save sent.id somewhere instead of hardcoding
    console.log('New message sent:', sent.id);
  }
};
