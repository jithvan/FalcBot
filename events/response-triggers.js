module.exports = (client) => {
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

    // Destiny 2
    client.on('message', (message) => {
        if (message.channel.id === '383758230293315585') {
            if (message.author.bot) return;
    
            if (Math.random() < .0005) {
                message.channel.send("You just never quit, do you? Took out Ghaul. Woke up the traveler. And now half of what i hear in the streets is how much you and your clan are making a difference. And that's why i started this whole clan thing in the first place. People are still waiting for the Vanguard to lead the way. But it's time for a change. And guardians like you are making it happen. No pressure.", {files: ["https://media1.tenor.com/images/b633b3b53c12dd0993a6dd5e9ed17a31/tenor.gif?itemid=18200055"]});

            }
        }
    })
}