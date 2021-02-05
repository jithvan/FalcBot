const Message = require('./message-rolestext')

module.exports = (client) => {
  const channelId = '375735559651328002'

  let Text = '**Community Ranks**\nIf you are a member of a team that represents our community in a specific game, this ranking system applies to you.\n**★** <@&375742708662272002> - The Owner\n**★** <@&195899674748649483> - The Leader(s), they have absolute power over their respective teams, and coordinate everything from recruitment to team management.\n**★** <@&285363048074575873> - Same roles as officer but more senior in terms of decision making.\n**★** <@&195899671128834049> - The players that report to the Commander(s) and make sure every other member receives instructions. They are given the authority to make collective decisions on behalf of the Commander. They may also be involved in clan management.\n**★** <@&196010446388461569> - The most dedicated or skilled players in the team. They may also be involved in recruitment.\n**★** <@&196010539355209728> - Skilled, trusted and devoted members of the clan that make up the “core” team.\n**★** <@&195899727328313344> - Members of this rank are officially made a part of the team and have more privileges within the team than recruits.\n**★** <@&195899746223652864> - The default rank for new members.\n\n**Staff Ranks**\nThese roles apply to members that actively help with community management.\n**★** <@&476647366892453899> – Founder\n**★** <@&476647701505638401> – Commanders that assist with running the community. They oversee recruiters and moderators.\n**★** <@&583709927109820417> – Moderates discussion within the community and enforces community rules.\n**★** <@&745100827818983524> – Helps introduce new members to the community.\n ‎'

  Message(client, channelId, Text)
}
