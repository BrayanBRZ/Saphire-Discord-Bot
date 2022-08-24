const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (client, msg, mentioned, myId, lang) => {
    var messages = [
    `https://c.tenor.com/doc8uMAT5ssAAAAC/anime-love.gif`,
    `https://c.tenor.com/pYzpQgkAQJkAAAAC/violet-evergarden-hug.gif`,
    `https://c.tenor.com/A5ZuMAZ44l8AAAAC/anime-cuddle.gif`,
    `https://c.tenor.com/xIuXbMtA38sAAAAd/toilet-bound-hanakokun.gif`,
    `https://c.tenor.com/ixaDEFhZJSsAAAAC/anime-choke.gif`
    ];

    if (mentioned == undefined) {
        if (lang == null) {
            const mentionProblen1 = new MessageEmbed()
            .setColor('#cf0404')
            .setAuthor(`There's a problem!`, client.user.displayAvatarURL())
            .setDescription(`❗ You need to mention a user!`)
            return msg.channel.send(mentionProblen1);
          }
          else if (lang == 2) {
            const mentionProblen2 = new MessageEmbed()
            .setColor('#cf0404')
            .setAuthor(`Há um problema!`, client.user.displayAvatarURL())
            .setDescription(`❗ Você precisa mencionar um usuário!`)
            return msg.channel.send(mentionProblen2);
          }
          else if (lang == 3) {
            const mentionProblen3 = new MessageEmbed()
            .setColor('#cf0404')
            .setAuthor(`¡Hay un problema!`, client.user.displayAvatarURL())
            .setDescription(`❗ ¡Necesitas mencionar a un usuario!`)
            return msg.channel.send(mentionProblen3);
          }
    }
    var randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    if (lang == null) {
        let cuddle = new MessageEmbed()
        .setColor('#4e86cf')
        .setAuthor(`Hugging!`, client.user.displayAvatarURL())
        .setImage(randomMessage)
        .setDescription(msg.author.username + ` hugged ` + mentioned.username + `!`)
        return msg.channel.send(cuddle);
    }
    else if (lang == 2) {
        let kissing2 = new MessageEmbed()
        .setColor('#4e86cf')
        .setAuthor(`Abraçando!`, client.user.displayAvatarURL())
        .setImage(randomMessage)
        .setDescription(msg.author.username + ` abraçou ` + mentioned.username + `!`)
        return msg.channel.send(kissing2);
    }
    else if (lang == 3) {
        let kissing3 = new MessageEmbed()
        .setColor('#4e86cf')
        .setAuthor(`¡Abrazar!`, client.user.displayAvatarURL())
        .setImage(randomMessage)
        .setDescription(msg.author.username + ` abrazou ` + mentioned.username + `!`)
        return msg.channel.send(kissing3);
    }
};

module.exports ={
    name: "cuddle @user",
    help: "Cuddle the defined user!",
    args: false,
    cooldown: 3,
    aliases: [`gifs`, `images`],
    execute,
}