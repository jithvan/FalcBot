module.exports = (client) => {
    client.on('message', (message) => {
    
        message.content.toLowerCase;
        
        if (message.author.bot) return;

        if (message.content.includes("who is god?")) {
            message.channel.send("This is god", {files: ["https://pbs.twimg.com/media/EWBUHfjXQAAPvY7.jpg"]});
        }
    
        if (message.content.includes("merry") || message.content.includes("christmas")) {
            if (Math.random() < .5) {
                message.channel.send("<a:ZeroTwo:791772994908979280>");
            }
        }

        if (message.content.includes("bruh")) {
            if (Math.random() < .5) {
                message.channel.send("Bruh", {files: ["https://media1.tenor.com/images/460b6dcf3573845f0a156f7c51834bb1/tenor.gif"]});
            }
        }

        if (message.content.includes("shit") || message.content.includes("fuck")) {
            if (Math.random() < .01) {
                message.channel.send("not in my Christian Discord Server");
            }
        }

        if (message.content.includes("bambi")) {
            if (Math.random() < .01) {
                message.channel.send("", {files: ["https://media1.tenor.com/images/b1557ea25a791b29b5bed7d28bd0ce83/tenor.gif?itemid=8978880"]});
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

    client.on('message', (message) => {
        if (message.channel.id === '383758230293315585') {
            if (message.author.bot) return;
    
            if (Math.random() < .0005) {
                message.channel.send("Whether we wanted it or not, we've stepped into a war with the Cabal on Mars. So let's get to taking out their command, one by one. Valus Ta'aurc. From what I can gather he commands the Siege Dancers from an Imperial Land Tank outside of Rubicon. He's well protected, but with the right team, we can punch through those defenses, take this beast out, and break their grip on Freehold.", {files: ["https://media1.tenor.com/images/4e7d85d7ce4d47c279c58c98a9f1c0bc/tenor.gif?itemid=20225296"]});

            }
        }
    })

    client.on('message', (message) => {
    
        message.content.toLowerCase;
        if (message.author.bot) return;
    
        if (message.content.includes("trials")) {
            let replies = ["https://i.imgur.com/RS72DH1.png", "https://i.imgur.com/qoopFlZ.jpg", "https://i.imgur.com/Q4WDXUv.jpg", "https://i.imgur.com/H337wlr.jpg", "https://i.imgur.com/hk0pfbK.jpg", "https://i.imgur.com/8YO21Cn.jpg", "https://i.imgur.com/Fci8xHb.jpg", "https://i.imgur.com/5tMvH2x.jpg", "https://i.imgur.com/mKnMNNg.jpg"];
            let result = Math.floor((Math.random()*replies.length));
            if (Math.random() < .1) {
                message.channel.send("", {files: [replies[result]]});
            }
        }
    })
}