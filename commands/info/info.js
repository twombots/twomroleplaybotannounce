const Discord = require('discord.js');

exports.run = (client, message, _args) => {
    const version = client.config.botVersion;
    let embed = new Discord.RichEmbed()
        .setTitle("**TwoM RP [CPM ROLEPLAY] **")
        .setDescription("Roleplay in Car Parking")
        .addField("Created :",
            "For TwoM Family \n\n")
        .setTimestamp()
        .setFooter(`Version:  ${version} | Currently on ${client.guilds.size} servers with ${client.users.size} users.`)
        .setColor(client.config.embedColor);

    message.channel.send(embed);
}

exports.help = {
    enabled: true,
    hideHelp: false,
    type: "info",
    name: "info",
    description: "The `info` command displays info about Not dank memer, and the creators of MM.",
    usage: "`pls info`",
}
