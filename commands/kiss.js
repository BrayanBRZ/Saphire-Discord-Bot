const MessageEmbed = require("discord.js").MessageEmbed;

const execute  = (client, msg, mentioned, lang) => {
    var messages = [
    `https://c.tenor.com/TnjL6WcdkkwAAAAd/anime-kiss.gif`,
    `https://c.tenor.com/F02Ep3b2jJgAAAAC/cute-kawai.gif`,
    `https://c.tenor.com/uT-rE2oDP6AAAAAC/anime-couple-anime-kiss-couple.gif`,
    `https://c.tenor.com/I8kWjuAtX-QAAAAC/anime-ano.gif`,
    `https://c.tenor.com/Daj-Pn82PagAAAAC/gif-kiss.gif`
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
        let kissing1 = new MessageEmbed()
        .setColor('#4e86cf')
        .setAuthor(`kissing!`, client.user.displayAvatarURL())
        .setImage(randomMessage)
        .setDescription(msg.author.username + ` kissed ` + mentioned.username + `!`)
        return msg.channel.send(kissing1);
    }
    else if (lang == 2) {
        let kissing2 = new MessageEmbed()
        .setColor('#4e86cf')
        .setAuthor(`Beijando!`, client.user.displayAvatarURL())
        .setImage(randomMessage)
        .setDescription(msg.author.username + ` beijou ` + mentioned.username + `!`)
        return msg.channel.send(kissing2);
    }
    else if (lang == 3) {
        let kissing3 = new MessageEmbed()
        .setColor('#4e86cf')
        .setAuthor(`¡Besos!`, client.user.displayAvatarURL())
        .setImage(randomMessage)
        .setDescription(msg.author.username + ` beso ` + mentioned.username + `!`)
        return msg.channel.send(kissing3);
    }
};

module.exports ={
    name: "kiss @user",
    help: "Kiss the defined user!",
    args: false,
    cooldown: 3,
    aliases: [`gifs`, `images`],
    execute,
}