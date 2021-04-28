const Discord = require('discord.js');
const botsettings = require('./botsettings.json');
const client = new Discord.Client({disableEveryone: true});

const welcome = require('./events/welcome')
const respond = require('./events/response-triggers')
// const twitchAlert = require('./events/twitch-alert')

// Initialize Public Channel Text
const roleClaim1 = require('./public-channels/role-assignment/role-instructions')
const roleClaim2 = require('./public-channels/role-assignment/role-shooter')
const roleClaim3 = require('./public-channels/role-assignment/role-shooter2')
const roleClaim4 = require('./public-channels/role-assignment/role-battleroyal')
const roleClaim5 = require('./public-channels/role-assignment/role-survival')
const roleClaim6 = require('./public-channels/role-assignment/role-rpgmmo')
const roleClaim7 = require('./public-channels/role-assignment/role-strategy')
const roleClaim8 = require('./public-channels/role-assignment/role-sports')
const roleClaim9 = require('./public-channels/role-assignment/role-miscellaneous')
const roleClaim10 = require('./public-channels/role-assignment/role-footer')

//const communityLinks = require('./public-channels/community-links/content-links')

//const welcomeHead = require('./public-channels/welcome/welcome-head')
//const welcomeHeadText = require('./public-channels/welcome/welcome-headtext')
//const welcomeRules = require('./public-channels/welcome/welcome-rules')
//const welcomeRulesText = require('./public-channels/welcome/welcome-rulestext')
//const welcomeChannels = require('./public-channels/welcome/welcome-channels')
//const welcomeChannelsText = require('./public-channels/welcome/welcome-channelstext')
//const welcomeRoles = require('./public-channels/welcome/welcome-roles')
//const welcomeRolesText = require('./public-channels/welcome/welcome-rolestext')
//const welcomeRolesText2 = require('./public-channels/welcome/welcome-rolestext2')
//const welcomeCommands = require('./public-channels/welcome/welcome-commands')
//const welcomeCommandsText = require('./public-channels/welcome/welcome-commandstext')

client.on('ready', () => {
  console.log('The client is ready!')

  // Welcome Message
  welcome(client)

  // Response Triggers
  respond(client)

  // Twitch Stream Alerts
  // twitchAlert(client)

  // Post Public Channel Text
  roleClaim1(client)
  roleClaim2(client)
  roleClaim3(client)
  roleClaim4(client)
  roleClaim5(client)
  roleClaim6(client)
  roleClaim7(client)
  roleClaim8(client)
  roleClaim9(client)
  roleClaim10(client)

  //communityLinks(client)

  //welcomeHead(client)
  //welcomeHeadText(client)
  //welcomeRules(client)
  //welcomeRulesText(client)
  //welcomeChannels(client)
  //welcomeChannelsText(client)
  //welcomeRoles(client)
  //welcomeRolesText(client)
  //welcomeRolesText2(client)
  //welcomeCommands(client)
  //welcomeCommandsText(client)
})

// Command Handler
require("./util/eventHandler")(client)

const fs = require("fs");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        client.commands.set(pull.config.name, pull);  
        pull.config.aliases.forEach(alias => {
            client.aliases.set(alias, pull.config.name)
        });
    });
});

client.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = message.content.substring(message.content.indexOf(' ')+1);

    if(!message.content.startsWith(prefix)) return;
    let commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(client,message,args)

})

client.login(process.env.token);