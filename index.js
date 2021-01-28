const Discord = require('discord.js');
const botsettings = require('./botsettings.json');
const mongoose = require('mongoose');

const bot = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

mongoose.connect(process.env.MONGO_URI)

// Respond to messages
bot.on('message', (message) => {
    
    message.content.toLowerCase;
    if (message.author.bot) return;

    if (message.content.includes("who is god?")) {
        message.channel.send("This is god", {files: ["https://media.discordapp.net/attachments/467026448234840074/777060171099930664/image0.jpg"]});
    }
})

bot.on('message', (message) => {
    
    message.content.toLowerCase;
    if (message.author.bot) return;

    if (message.content.includes("bambi")) {
        if (Math.random() < .01) {
            message.channel.send("", {files: ["https://media1.tenor.com/images/b1557ea25a791b29b5bed7d28bd0ce83/tenor.gif?itemid=8978880"]});
        }
    }
})

bot.on('message', (message) => {

    message.content.toLowerCase;
    if (message.author.bot) return;

    if (message.content.includes("shit") || message.content.includes("fuck")) {
        if (Math.random() < .01) {
            message.channel.send("not in my Christian Discord Server");
        }
    }
})

bot.on('message', (message) => {

    message.content.toLowerCase;
    if (message.author.bot) return;

    if (message.content.includes("merry") || message.content.includes("christmas")) {
        if (Math.random() < .50) {
            message.channel.send("<a:ZeroTwo:791772994908979280>");
        }
    }
})

bot.on('message', (message) => {

    message.content.toLowerCase;
    if (message.author.bot) return;

    if (message.content.includes("bruh")) {
        if (Math.random() < .01) {
            message.channel.send("Bruh", {files: ["https://media1.tenor.com/images/460b6dcf3573845f0a156f7c51834bb1/tenor.gif"]});
        }
    }
})

// Allegedly
bot.on('message', (message) => {

    if (message.author.bot) return;

    let replies = ["Allegedly", "That's what she said"];
    let result = Math.floor((Math.random()*replies.length));
    if (Math.random() < .01) {
        message.channel.send(replies[result]);
    }
})

// Recruiter Ping
bot.on('message', (message) => {
    if (message.channel.id === '285362769908203521') {
        message.content.toLowerCase;
        if (message.author.bot) return;

        if (message.content.includes("<@&745100827818983524>")) {
            message.channel.send("Please hang tight! A Recruiter will be with you as soon as one is available.");
            message.channel.send("Response times may be longer between 2AM and 10AM EST");
        }
    }
})

// Welcome Message
bot.on("guildMemberAdd", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'mod-log')
    welcomeChannel.send (`${member} Welcome to the Server! Visit #❗role-assignment in order to get access to specific game text channels.`)
})

// Command Handler
require("./util/eventHandler")(bot)

const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);  
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = message.content.substring(message.content.indexOf(' ')+1);

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)

})

bot.login(process.env.token);