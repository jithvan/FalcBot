const Discord = require('discord.js');
const botsettings = require('./botsettings.json');
const welcome = require('./events/welcome')

const client = new Discord.Client({disableEveryone: true});

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
const welcomeCommandsText = require('./public-channels/welcome/welcome-commandstext')

client.on('ready', () => {
  console.log('The client is ready!')

  //Welcome Message
  welcome(client)

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
  welcomeCommandsText(client)
})

// Respond to messages
client.on('message', (message) => {
    
    message.content.toLowerCase;
    if (message.author.bot) return;

    if (message.content.includes("who is god?")) {
        message.channel.send("This is god", {files: ["https://media.discordapp.net/attachments/467026448234840074/777060171099930664/image0.jpg"]});
    }
})

client.on('message', (message) => {
    
    message.content.toLowerCase;
    if (message.author.bot) return;

    if (message.content.includes("bambi")) {
        if (Math.random() < .01) {
            message.channel.send("", {files: ["https://media1.tenor.com/images/b1557ea25a791b29b5bed7d28bd0ce83/tenor.gif?itemid=8978880"]});
        }
    }
})

client.on('message', (message) => {

    message.content.toLowerCase;
    if (message.author.bot) return;

    if (message.content.includes("shit") || message.content.includes("fuck")) {
        if (Math.random() < .01) {
            message.channel.send("not in my Christian Discord Server");
        }
    }
})

client.on('message', (message) => {

    message.content.toLowerCase;
    if (message.author.bot) return;

    if (message.content.includes("merry") || message.content.includes("christmas")) {
        if (Math.random() < .50) {
            message.channel.send("<a:ZeroTwo:791772994908979280>");
        }
    }
})

client.on('message', (message) => {

    message.content.toLowerCase;
    if (message.author.bot) return;

    if (message.content.includes("bruh")) {
        if (Math.random() < .01) {
            message.channel.send("Bruh", {files: ["https://media1.tenor.com/images/460b6dcf3573845f0a156f7c51834bb1/tenor.gif"]});
        }
    }
})

// Allegedly
client.on('message', (message) => {

    if (message.author.bot) return;

    let replies = ["Allegedly", "That's what she said"];
    let result = Math.floor((Math.random()*replies.length));
    if (Math.random() < .01) {
        message.channel.send(replies[result]);
    }
})

// Recruiter Ping
client.on('message', (message) => {
    if (message.channel.id === '285362769908203521') {
        message.content.toLowerCase;
        if (message.author.bot) return;

        if (message.content.includes("<@&745100827818983524>")) {
            message.channel.send("Please hang tight! A Recruiter will be with you as soon as one is available.");
            message.channel.send("Response times may be longer between 2AM and 10AM EST");
        }
    }
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