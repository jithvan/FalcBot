module.exports = client => { 
    console.log(`${client.user.username} is online`)
    client.user.setActivity("www.falcon-gaming.net", {type: ""});
}