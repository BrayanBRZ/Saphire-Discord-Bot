const MessageEmbed = require("discord.js").MessageEmbed;

const execute  = (client, msg, mentioned, lang) => {
    let love = Math.floor(Math.random() * 100) +1
    let loveImage;
    let loveEmoji;

    if (love > 79) {
        loveImage = `https://i.imgur.com/9uzmcJd.gif`
        loveEmoji = `💝`
    }
    else if (love > 59 && love < 80) {
        loveImage = `https://c.tenor.com/nOARJZENR9UAAAAC/anime-in-love.gif`
        loveEmoji = `💖`
    }
    else if (love > 39 && love < 60) {
        loveImage = `https://c.tenor.com/UoGX0V3C8pgAAAAC/anime-lovesick.gif`
        loveEmoji = `❤️`
    }
    else {
        loveImage = `https://c.tenor.com/9GwESelzF9kAAAAd/foxe-loh.gif`
        loveEmoji = `💔`
    }
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
    if (lang == null) {
        let ship1 = new MessageEmbed()
        .setColor('#4e86cf')
        .setAuthor(`Shippando!`, client.user.displayAvatarURL())
        .setImage(loveImage)
        .setDescription(`${loveEmoji} ` + msg.author.username + ` shipped with ` + mentioned.username + ` and it is ${love}%!`)
        return msg.channel.send(ship1);
    }
    else if (lang == 2) {
        let ship2 = new MessageEmbed()
        .setColor('#4e86cf')
        .setAuthor(`Shippando!`, client.user.displayAvatarURL())
        .setImage(loveImage)
        .setDescription(`${loveEmoji} ` + msg.author.username + ` shipado com ` + mentioned.username + ` resulta em ${love}%!`)
        return msg.channel.send(ship2);
    }
    else if (lang == 3) {
        let ship3 = new MessageEmbed()
        .setColor('#4e86cf')
        .setAuthor(`¡Shippando!`, client.user.displayAvatarURL())
        .setImage(loveImage)
        .setDescription(`${loveEmoji} ` + msg.author.username + ` shipado com ` + mentioned.username + ` es ${love}%!`)
        return msg.channel.send(ship3);
    }
};

module.exports ={
    name: "ship @user",
    help: "ship with the defined user!",
    args: false,
    cooldown: 3,
    aliases: [`gifs`, `images`],
    execute,
}