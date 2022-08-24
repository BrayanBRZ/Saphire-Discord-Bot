const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (client, msg, mentioned, lang) => {
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
    let avatar = new MessageEmbed()
    .setColor('#4e86cf')
    .setAuthor(`Avatar!`, client.user.displayAvatarURL())
    .setImage(mentioned.displayAvatarURL({ dynamic: true, size: 512, }))
    .setDescription(mentioned.username + `#` + mentioned.discriminator)
    return msg.channel.send(avatar);
};

module.exports ={
    name: "avatar @user",
    help: "View a particular user's avatar!",
    args: false,
    cooldown: 3,
    aliases: [`gifs`, `images`],
    execute,
}