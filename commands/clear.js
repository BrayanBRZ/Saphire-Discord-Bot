const MessageEmbed = require("discord.js").MessageEmbed;

const execute = async (client, msg, args, lang) => {
  if (!msg.member.permissions.has("MANAGE_MESSAGES")) {
    if (lang == null) {
      const permission1 = new MessageEmbed()
      .setColor('#cf0404')
      .setAuthor(`There's a problem!`, client.user.displayAvatarURL())
      .setDescription(`❗ You do not have \`Manage Messages\` permission!`)
      return msg.channel.send(permission1);
    }
    else if (lang == 2) {
      const permission2 = new MessageEmbed()
      .setColor('#cf0404')
      .setAuthor(`Há um problema!`, client.user.displayAvatarURL())
      .setDescription(`❗ Você não tem permissão para \`Gerenciar Mensagens\`!`)
      return msg.channel.send(permission2);
    }
    else if (lang == 3) {
      const permission3 = new MessageEmbed()
      .setColor('#cf0404')
      .setAuthor(`¡Hay un problema!`, client.user.displayAvatarURL())
      .setDescription(`❗ ¡No tiene permiso de \`Administrar Mensajes\`!`)
      return msg.channel.send(permission3);
    }
  }
  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 1 || deleteCount > 99) {
    if (lang == null) {
      const cleProblen1 = new MessageEmbed()
      .setColor('#cf0404')
      .setAuthor(`There's a problem!`, client.user.displayAvatarURL())
      .setDescription(`Enter a number between 1-99!`)
      return msg.channel.send(cleProblen1);
    }
    else if (lang == 2) {
        const cleProblen2 = new MessageEmbed()
        .setColor('#cf0404')
        .setAuthor(`Há um problema!`, client.user.displayAvatarURL())
        .setDescription(`❗ Informe um número entre 1-99!`)
        return msg.channel.send(cleProblen2);
    }
    else if (lang == 3) {
      const cleProblen3 = new MessageEmbed()
      .setColor('#cf0404')
      .setAuthor(`¡Hay un problema!`, client.user.displayAvatarURL())
      .setDescription(`❗ ¡Informe un número entre 1-99!`)
      return msg.channel.send(cleProblen3);
    }
  }
  const fetched = await msg.channel.messages.fetch({
    limit: deleteCount + 1
  });
  msg.channel.bulkDelete(fetched);
  if (lang == null) {
    const clean1 = new MessageEmbed()
    .setColor('#4e86cf')
    .setAuthor(`Clean channel!`, client.user.displayAvatarURL())
    .setDescription(":recycle: " + args[0] + " messages have been cleared from this chat!")
    return msg.channel.send(clean1).then(msg => msg.delete({timeout: 6000}));
  }
  else if (lang == 2) {
    const clean2 = new MessageEmbed()
    .setColor('#4e86cf')
    .setAuthor(`Canal limpo!`, client.user.displayAvatarURL())
    .setDescription(":recycle: " + args[0] + " mensagens foram limpas do canal!")
    return msg.channel.send(clean2).then(msg => msg.delete({timeout: 6000}));
  }
  else if (lang == 3) {
    const clean3 = new MessageEmbed()
    .setColor('#4e86cf')
    .setAuthor(`¡Canal limpio!`, client.user.displayAvatarURL())
    .setDescription(":recycle: !" + args[0] + " mensajes fueron borrados del canal!")
    return msg.channel.send(clean3).then(msg => msg.delete({timeout: 6000}));
  }
}

  module.exports ={
    name: "clear/c",
    help: "Clear messages from current channel!",
    execute,
}