const Message = require('./message-links')

module.exports = (client) => {
  const channelId = '375735631420063744'

  let Text = `<:FALC:466962588207546368> **Website:** <https://www.falcon-gaming.net>\n
<:Steam:806653627367555093> **Steam Group:** <https://steamcommunity.com/groups/FalconGamingNetwork>\n
<:FBGroup:466961699132407838> **Facebook Group:** <https://www.facebook.com/groups/We.Are.Falcons>\n
<:FB:806653627820933150> **Facebook Page:** <https://www.facebook.com/FalconGamingNet>\n
<:Twitch:466961701477023755> **Twitch:** <https://www.twitch.tv/falcongamingnetwork>\n
<:YT:466961702223872001> **YouTube:** <https://www.youtube.com/c/falcongamingnetwork>\n
<:IG:466961701653315586> **Instagram:** <https://www.instagram.com/falcon_gaming_official>
  `

  Message(client, channelId, Text)
}
