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
    else if (queue.connection.dispatcher.paused) {
      queue.connection.dispatcher.resume();
      queue.connection.dispatcher.pause();
      queue.connection.dispatcher.resume();
      const resumeSuccs = new MessageEmbed()
      if (lang == null) {
        const resumeMusic1 = new MessageEmbed()
        .setColor('#4e86cf')
        .setAuthor(`Music continued!`, client.user.displayAvatarURL())
        .setDescription(`▶️ Successfully continued music!`)
        msg.channel.send(resumeSuccs);
        return msg.channel.send(resumeMusic1);
      }
      else if (lang == 2) {
          const resumeMusic2 = new MessageEmbed()
          .setColor('#4e86cf')
          .setAuthor(`Música continuada!`, client.user.displayAvatarURL())
          .setDescription(`▶️ Música continuada com sucesso!`)
          return msg.channel.send(resumeMusic2);
      }
      else if (lang == 3) {
        const resumeMusic3 = new MessageEmbed()
        .setColor('#4e86cf')
        .setAuthor(`¡La música continuó!`, client.user.displayAvatarURL())
        .setDescription(`▶️ ¡La música continuó con éxito!`)
        return msg.channel.send(resumeMusic3);
      }
    }
    else {
      queue.connection.dispatcher.pause();
      if (lang == null) {
        const resumeMusic1 = new MessageEmbed()
        .setColor('#4e86cf')
        .setAuthor(`Paused!`, client.user.displayAvatarURL())
        .setDescription(`⏸ Successfully paused music!`)
        return msg.channel.send(resumeMusic1);
      }
      else if (lang == 2) {
          const resumeMusic2 = new MessageEmbed()
          .setColor('#4e86cf')
          .setAuthor(`Pausado!`, client.user.displayAvatarURL())
          .setDescription(`▶️ Música pausada com sucesso!`)
          return msg.channel.send(resumeMusic2);
      }
      else if (lang == 3) {
        const resumeMusic3 = new MessageEmbed()
        .setColor('#4e86cf')
        .setAuthor(`¡Pausado!`, client.user.displayAvatarURL())
        .setDescription(`▶️ ¡Música pausada con éxito!`)
        return msg.channel.send(resumeMusic3);
      } 
    }
  }
    
  module.exports = {
    name: "resume/pause/rp",
    help: "Pause and continue playing current song queue!",
    execute,
  };