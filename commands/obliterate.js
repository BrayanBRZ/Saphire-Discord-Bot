const MessageEmbed = require("discord.js").MessageEmbed;

const execute  = (client, msg, mentioned, lang) => {
    var messages = [
    `https://c.tenor.com/GDgIfpirQLAAAAAC/dragon-ball-super-broly.gif`,
    `https://c.tenor.com/KH5Q_JwkzEwAAAAd/exodia-yu-gi-oh.gif`,
    `https://c.tenor.com/m6r58qWBZbwAAAAC/thanos-just-the-snap.gif`,
    `https://c.tenor.com/WJZhnnnFKCUAAAAC/explosion-boom.gif`,
    `https://c.tenor.com/c3_yoyj4tk0AAAAd/supernova-ssb.gif`
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
        let oblirating1 = new MessageEmbed()
        .setColor('#4e86cf')
        .setAuthor(`Obliterating!`, client.user.displayAvatarURL())
        .setImage(randomMessage)
        .setDescription(msg.author.username + ` obliterated ` + mentioned.username + `!`)
        return msg.channel.send(oblirating1);
    }
    else if (lang == 2) {
        let oblirating2 = new MessageEmbed()
        .setColor('#4e86cf')
        .setAuthor(`Obliterando!`, client.user.displayAvatarURL())
        .setImage(randomMessage)
        .setDescription(msg.author.username + ` obliterou ` + mentioned.username + `!`)
        return msg.channel.send(oblirating2);
    }
    else if (lang == 3) {
      let oblirating3 = new MessageEmbed()
      .setColor('#4e86cf')
      .setAuthor(`¡Obliterando!`, client.user.displayAvatarURL())
      .setImage(randomMessage)
      .setDescription(msg.author.username + ` borrou ` + mentioned.username + `!`)
      return msg.channel.send(oblirating3);
    }
};

module.exports ={
    name: "obliterate/ob @user",
    help: "Obliterates the defined user!",
    args: false,
    cooldown: 3,
    aliases: [`gifs`, `images`],
    execute,
}