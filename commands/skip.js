const playSong = require("./play").playSong;
const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (client, msg, lang) => {
    const queue = client.queues.get(msg.guild.id);
    if (!queue) {
        if (lang == null) {
            const noMusic1 = new MessageEmbed()
            .setColor('#cf0404')
            .setAuthor(`There's a problem!`, client.user.displayAvatarURL())
            .setDescription(`❗ There is no music playing!`)
            return msg.channel.send(noMusic1);
        }
        else if (lang == 2) {
            const noMusic2 = new MessageEmbed()
            .setColor('#cf0404')
            .setAuthor(`Há um problema!`, client.user.displayAvatarURL())
            .setDescription(`❗ Não há música tocando!`)
            return msg.channel.send(noMusic2);
        }
        else if (lang == 3) {
            const noMusic3 = new MessageEmbed()
            .setColor('#cf0404')
            .setAuthor(`¡Hay un problema!`, client.user.displayAvatarURL())
            .setDescription(`❗ ¡No se reproduce música!`)
            return msg.channel.send(noMusic3);
        }
    }
    if (!msg.member.voice.channel) {
        if (lang == null) {
            const UserNotConn1 = new MessageEmbed()
            .setColor('#cf0404')
            .setAuthor(`There's a problem!`, client.user.displayAvatarURL())
            .setDescription(`❗ You must be on a voice channel to use this command!`)
            return msg.channel.send(UserNotConn1);
        }
        else if (lang == 2) {
            const UserNotConn2 = new MessageEmbed()
            .setColor('#cf0404')
            .setAuthor(`Há um problema!`, client.user.displayAvatarURL())
            .setDescription(`❗ Você deve estar em um canal de voz para usar este comando!`)
            return msg.channel.send(UserNotConn2);
        }
        else if (lang == 3) {
            const UserNotConn3 = new MessageEmbed()
            .setColor('#cf0404')
            .setAuthor(`¡Hay un problema!`, client.user.displayAvatarURL())
            .setDescription(`❗ ¡Debe estar en un canal de voz para usar este comando!`)
            return msg.channel.send(UserNotConn3);
        }
    }
  queue.songs.shift();
  client.queues.set(msg.guild.id, queue);
  playSong(client, msg, queue.songs[0], lang);
  if (lang == null) {
      const skipMusic1 = new MessageEmbed()
      .setColor('#4e86cf')
      .setAuthor(`Successfully skipped!`, client.user.displayAvatarURL())
      .setDescription(`⏭ Successfully skipped music!`)
      return msg.channel.send(skipMusic1);
  }
  else if (lang == 2) {
      const skipMusic2 = new MessageEmbed()
      .setColor('#4e86cf')
      .setAuthor(`Pulado com sucesso!`, client.user.displayAvatarURL())
      .setDescription(`⏭ Música pulada com sucesso!`)
      return msg.channel.send(skipMusic2);
  }
  else if (lang == 3) {
    const skipMusic3 = new MessageEmbed()
    .setColor('#4e86cf')
    .setAuthor(`¡Omitido con éxito!`, client.user.displayAvatarURL())
    .setDescription(`⏭ ¡Canción omitida con éxito!`)
    return msg.channel.send(skipMusic3);
  }
};

module.exports = {
  name: "skip",
  help: "Skip to the next song!",
  execute,
};