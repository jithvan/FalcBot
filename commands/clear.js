module.exports.run = async (client, message, args) => {
            
    if (message.deletable) {
        message.delete();
    }

    // Member doesn't have permissions
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("You don't have permission to delete messages!").then(m => m.delete(5000));
    }

    // Check if args[0] is a number
    if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
        return message.reply("Please type a number > 0").then(m => m.delete(5000));
    }

    // Maybe the bot can't delete messages
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("Sorry. I can't delete messages.").then(m => m.delete(5000));
    }

    let deleteAmount;

    if (parseInt(args[0]) > 100) {
        deleteAmount = 100;
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount+1, true)
        .then(deleted => message.channel.send(`Deleted \`` + parseInt(deleted.size)-1 `\` messages.`))
        .then(m => { 
            m.delete({ timeout: 3000 });
        })
        .catch(err => message.reply(`Something went wrong... ${err}`));
}
    
module.exports.config = {
    name: "clear",
    description: "clears message",
    usage: "!clear",
    accessableby: "Moderators",
    aliases: ['c', 'purge', 'nuke']
}