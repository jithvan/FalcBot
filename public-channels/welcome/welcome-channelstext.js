const Message = require('./message-channelstext')

module.exports = (client) => {
  const channelId = '375735559651328002'

  let Text = '**Server Info**\n**★** <#375735559651328002> - You are here! Our server rules and information can be found here.\n**★** <#740340760863309835> - Any community announcements will be posted here.\n**★** <#465974772828864532> - You can assign game roles to yourself here, and gain access to their respective channels.\n**★** <#375735631420063744> - A list of all our official community pages.\n\n**Public Chat**\n**★** <#86420181726789632> - Any general game talk or community related discussions happen here!\n**★** <#467026448234840074> - Community YouTube and Twitch feeds get posted here. Feel free to post your videos, pictures and social media in here too!\n**★** <#375735148517261314> - Home to the dankest of memes.\n\n**Bot Spam**\n**★** <#465920602683867136> - Bot commands can be typed in here.\n**★** <#632311589604687944> - Warnings and bans get logged here.\n\n**Support**\n**★** <#285362769908203521> - Do you need to be assigned a role? Need help navigating our community? Have any technical questions? Maybe you need relationship advice? Let us know here and we will do our best to help you out.\n**★** <#375735453845815297> - Have any suggestions for us to make this community better? Let us know here.\n**★** <#588371215702556682> - All our Discord Nitro Server Boosters, Twitch Subscribers, Donators and anyone who supports the growth of our community gets access to this channel.\n**★** <#642081035676418086> - Not going to be around for a while? Let us know here.\n\n**Teams**\nDedicated channels for popular games within the community.\n\n**Servers**\nDedicated channels for game servers we host.\n\n**Private Channels**\nDiscord Nitro Server Boosters, Twitch Subscribers, Donators and anyone who supports the growth of our community can request their own personal space in our discord!'

  Message(client, channelId, Text)
}