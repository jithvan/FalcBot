const Message = require('./message-rulestext')

module.exports = (client) => {
  const channelId = '375735559651328002'

  let Text = '**1 )** Treat everyone with respect. Absolutely no harassment, witch hunting, sexism, racism, or hate speech will be tolerated.\n\n**2 )** No NSFW or obscene content. This includes text, images, or links featuring nudity, sex, hard violence, or other graphically disturbing content.\n\n**3 )** No spam (including pings) or self-promotion (server invites, advertisements, etc) without permission from a staff member. This includes DMing fellow members. Any Twitch or YouTube channel advertisement must be done in <#467026448234840074>, or else it will be deleted.\n\n**4 )** Please be mindful of channels and their uses. Stay on channel topic.\n\n**5 )** If a server Moderator asks you to stop doing something, you should listen to them. Moderators reserve the right to warn/mute/kick accordingly.\n\n**6 )** No recent Spoilers! This applies to Games, Movies and TV shows. Be mindful of all spoilers, and make sure that they are posted with the spoiler tag. Ask a staff member if you are not sure about what constitutes a recent spoiler.\n\n**7 )** If you see something against the rules or something that makes you feel unsafe, let a staff member know. We want this server to be a welcoming space! Any issues within the server which involve another member should be brought to the attention of a Moderator in a private DM.\n\nYou can find in-depth descriptions of our community rules on our forums:\n<https://forums.falcon-gaming.net/viewtopic.php?f=8&t=60>'

  Message(client, channelId, Text)
}
