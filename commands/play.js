const search = require("yt-search");
const ytdl = require("ytdl-core-discord");
const MessageEmbed = require("discord.js").MessageEmbed;
const stop = require("./stop");

const execute = (client, msg, args, lang) => {

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
  const s = args.join(" ");
  try {
    search(s, (err, result) => {
      if (err) {
        throw err;
      } else if (result && result.videos.length > 0) {
        const song = result.videos[0];
        const queue = client.queues.get(msg.guild.id);

        if (lang == null) {
          const addMusic1 = new MessageEmbed()
          .setColor('#4e86cf')
          .setAuthor(`Mussic add!`, client.user.displayAvatarURL())
          .setTitle(result.videos[0].title)
          .setURL(result.videos[0].url)
          .setFooter('Searched for ' + msg.author.username + `#` + msg.author.discriminator);
          msg.channel.send(addMusic1);
        }
        else if (lang == 2) {
          const addMusic2 = new MessageEmbed()
          .setColor('#4e86cf')
          .setAuthor(`Música adicionada!`, client.user.displayAvatarURL())
          .setTitle(result.videos[0].title)
          .setURL(result.videos[0].url)
          .setFooter('Procurado por ' + msg.author.username + `#` + msg.author.discriminator);
          msg.channel.send(addMusic2);
        }
        else if (lang == 3) {
          const addMusic3 = new MessageEmbed()
          .setAuthor(`¡Música añadida!`, client.user.displayAvatarURL())
          .setTitle(result.videos[0].title)
          .setURL(result.videos[0].url)
          .setFooter('Buscado por ' + msg.author.username + `#` + msg.author.discriminator);
          msg.channel.send(addMusic3);
        }

        if (queue) {
          queue.songs.push(song);
          client.queues.set(msg.guild.id, queue);
        } 
        else playSong(client, msg, song, lang);
      } else {
        if (lang == null) {
          const searchProblen1 = new MessageEmbed()
          .setColor('#cf0404')
          .setAuthor(`There's a problem!`, client.user.displayAvatarURL())
          .setDescription(`❗ Sorry, I didn't finf what I wanted!`)
          return msg.channel.send(searchProblen1);
        }
        else if (lang == 2) {
          const searchProblen2 = new MessageEmbed()
          .setColor('#cf0404')
          .setAuthor(`Há um problema!`, client.user.displayAvatarURL())
          .setDescription(`❗ Desculpe, não encontrei o que queria!`)
          return msg.channel.send(searchProblen2);
        }
        else if (lang == 3) {
          const searchProblen3 = new MessageEmbed()
          .setColor('#cf0404')
          .setAuthor(`¡Hay un problema!`, client.user.displayAvatarURL())
          .setDescription(`❗ ¡Lo siento, no encontré lo que buscaba!`)
          return msg.channel.send(searchProblen3);
        }
      }
    });
  } catch (e) {
    console.error(e);
  }
};

const playSong = async (client, msg, song, lang) => {
  let queue = client.queues.get(msg.member.guild.id);
  if (!song) {
    if (queue) {
      queue.connection.disconnect();
      return client.queues.delete(msg.member.guild.id);
    }
  }
  if (!queue) {
    const conn = await msg.member.voice.channel.join();
    queue = {
      volume: 10,
      connection: conn,
      dispatcher: null,
      songs: [song],
    };
  }
    queue.dispatcher = await queue.connection.play(
    await ytdl(song.url, { highWaterMark: 1 << 25, filter: "audioonly", quality: `highestaudio` }),
    {
      type: "opus",
    }
  );
  if (lang == null) {
    const playMusic1 = new MessageEmbed()
    .setColor('#4e86cf')
    .setAuthor(`Now playing!`, client.user.displayAvatarURL())
    .setTitle(queue.songs[0].title)
    .setURL(queue.songs[0].url)
    .setFooter('Duration: ' + queue.songs[0].timestamp + ` || Channel: ` + queue.songs[0].author.name);
    msg.channel.send(playMusic1);
  }
  else if (lang == 2) {
    const playMusic2 = new MessageEmbed()
    .setColor('#4e86cf')
    .setAuthor(`Tocando agora!`, client.user.displayAvatarURL())
    .setTitle(queue.songs[0].title)
    .setURL(queue.songs[0].url)
    .setFooter('Duração: ' + queue.songs[0].timestamp + ` || Canal: ` + queue.songs[0].author.name);
    msg.channel.send(playMusic2);
  }
  else if (lang == 3) {
    const playMusic3 = new MessageEmbed()
    .setAuthor(`¡Tocando ahora!`, client.user.displayAvatarURL())
    .setTitle(queue.songs[0].title)
    .setURL(queue.songs[0].url)
    .setFooter('Duración: ' + queue.songs[0].timestamp + ` || Canal: ` + queue.songs[0].author.name);
    msg.channel.send(playMusic3);
  }
  

  queue.dispatcher.on("finish", () => {
      queue.songs.shift();
      playSong(client, msg, queue.songs[0]);
  });
  client.queues.set(msg.member.guild.id, queue);
};

module.exports = {
  name: "play/p",
  help: "Play the desired song on the user's current channel!",
  execute,
  playSong,
};