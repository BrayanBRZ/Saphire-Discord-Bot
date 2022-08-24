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
    queue.songs = [];
    client.queues.set(msg.guild.id, queue);
    queue.dispatcher.end();
    if (lang == null) {
        const stopMusic1 = new MessageEmbed()
        .setColor('#4e86cf')
        .setAuthor(`Successfully stopped!`, client.user.displayAvatarURL())
        .setDescription(`⏹ Play queue ended!`)
        return msg.channel.send(stopMusic1);
    }
    else if (lang == 2) {
        const stopMusic2 = new MessageEmbed()
        .setColor('#4e86cf')
        .setAuthor(`Parado com sucesso!`, client.user.displayAvatarURL())
        .setDescription(`⏹ A fila de reprodução encerrou!`)
        return msg.channel.send(stopMusic2);
    }
    else if (lang == 3) {
        const stopMusic3 = new MessageEmbed()
        .setColor('#4e86cf')
        .setAuthor(`¡Hay un problema!`, client.user.displayAvatarURL())
        .setDescription(`⏹ ¡Fin de la cola de reproducción!`)
        return msg.channel.send(stopMusic3);
    }
};

module.exports = {
    name: "stop",
    help: "Closses the current music playback queue!",
    execute,
};