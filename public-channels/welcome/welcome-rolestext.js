const Message = require('./message-rolestext')

module.exports = (client) => {
  const channelId = '375735559651328002'

  let Text = '**Community Ranks**\nIf you are a member of a clan/guild/team that represents our community in a specific game, this ranking system applies to you. Rank requirements are specific to the game you play, and for the most part, are given based on activity and ingame experience. If you are in multiple clans within the community you will be given the highest rank you are eligibile for. Community ranks do not inherently come with any adminstrative privileges and are more so a cosmetic indicator of how experienced/active you are in the games you play. You can refer to <https://www.falcon-gaming.net/designations/> for more information.\n**★** <@&375742708662272002>\n**★** <@&195899674748649483>\n**★** <@&285363048074575873>\n**★** <@&195899671128834049>\n**★** <@&196010446388461569>\n**★** <@&196010539355209728>\n**★** <@&195899727328313344>\n**★** <@&195899746223652864>\n\n**Staff Ranks**\nThese roles apply to volunteers that actively help with community management.\n**★** <@&476647366892453899> – Founder\n**★** <@&476647701505638401> – Commanders that assist with running the community. They oversee recruiters and moderators.\n**★** <@&583709927109820417> – Moderates discussion within the community and enforces community rules.\n**★** <@&745100827818983524> – Helps introduce and integrate new members into the community.\n ‎'

  Message(client, channelId, Text)
}
