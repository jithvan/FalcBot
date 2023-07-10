const Message = require('./message-channelstext')

module.exports = (client) => {
  const channelId = '375735559651328002'

  let Text = '**Server Info**\n**★** <#375735559651328002> - You are here! Our server rules and information can be found here.\n**★** <#740340760863309835> - Any community announcements will be posted here.\n**★** <#465974772828864532> - You can assign game roles to yourself here, and gain access to their respective channels.\n**★** <#375735631420063744> - A list of all our official community pages.\n**★** <#614247592964128779> - Everyone likes free stuff!.\n\n**Public Chat**\n**★** <#86420181726789632>\n**★** <#1061008501624811640>\n**★** <#467026448234840074>\n**★** <#375735148517261314>\n**★** <#990756311182475264>\n**★** <#1120823513566158928>\n**★** <#1005944531587440660>\n**★** <#1005944407163420712>\n**★** <#1005944158457970759>\n\n**Bot Spam**\n**★** <#465920602683867136>\n**★** <#632311589604687944>\n\n**Support**\n**★** <#285362769908203521> \n**★** <#1032018181608444024>\n**★** <#588371215702556682>\n**★** <#642081035676418086>\n\n**Games**\nDedicated channels for popular games within the community.\n\n**Private Channels**\nDiscord Nitro Server Boosters, Twitch Subscribers, Donators and anyone who supports the growth of our community can request their own personal space in our discord!'

  Message(client, channelId, Text)
}
