const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let slaps = ['https://media.giphy.com/media/xT8qB7Sbwskk27Rdy8/giphy.gif', 'https://media.giphy.com/media/IYcXTDme1ZPMI/giphy.gif', 'https://media.giphy.com/media/jX708Wo6abfC8/giphy.gif', 'https://media.giphy.com/media/P1EomtpqQW34c/giphy.gif', 'https://media.giphy.com/media/ewHSMEx2TtEo8/giphy.gif', 'https://media.giphy.com/media/11N2zX8Swp3csg/giphy.gif', 'https://media.giphy.com/media/XMrHbDQGOovbW/giphy.gif', 'https://i.imgur.com/lzc81Yw.gif', 'https://i.imgur.com/MnfAJbs.gif'];
    let slapR = slaps[Math.floor(Math.random() * slaps.length)];
    let personslap = message.mentions.members.first();
    let quote = ['Oof', 'Ouch', 'That hurt', 'Wow', 'LOL', 'Yeet'];
    let quoter = quote[Math.floor(Math.random() * quote.length)];

    if (!personslap) {
        let personslap = 'nobody';

        let embed = new Discord.RichEmbed()
            .setDescription(`**<@${message.author.id}> just slapped ${personslap}! ${quoter}!**`)
            .setImage(slapR)
            .setColor(client.config.embedColor);

        message.channel.send(embed);
        return;
    }

    if (personslap.id === message.author.id) {
        let personslap = 'they own damn selves';
        let embed = new Discord.RichEmbed()
            .setDescription(`**<@${message.author.id}> just slapped ${personslap}! ${quoter}!**`)
            .setImage(slapR)
            .setColor(client.config.embedColor);

        message.channel.send(embed);
        return;
    }

    if (personslap.id === client.user.id) {
        let personslap = 'me, the fricc?';
        let embed = new Discord.RichEmbed()
            .setDescription(`**<@${message.author.id}> just slapped ${personslap}! ${quoter}!**`)
            .setImage(slapR)
            .setColor(client.config.embedColor);

        message.channel.send(embed);
        return;
    }

    let embed = new Discord.RichEmbed()
        .setDescription(`**<@${message.author.id}> just slapped ${personslap}! ${quoter}!**`)
        .setImage(slapR)
        .setColor(client.config.embedColor);

    message.channel.send(embed);
}

exports.help = {
    enabled: true,
    hideHelp: false,
    type: "fun",
    name: "slap",
    description: "The `slap`command allows you to slap your friends to show your disdain for them! \:)",
    usage: "`pls slap <@user>`",
}
