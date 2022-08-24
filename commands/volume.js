const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (client, msg, args, lang) => {
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
    const volume = Number(args.join(" "));
    if(isNaN(volume) || volume < 0 || volume > 10) {     
        if (lang == null) {
            const InvalidVol1 = new MessageEmbed()
            .setColor('#cf0404')
            .setAuthor(`There's a problem!`, client.user.displayAvatarURL())
            .setDescription(`❗ The volume must be a value between 0 and 10!`)
            return msg.channel.send(InvalidVol1);
        }
        else if (lang == 2) {
            const InvalidVol2 = new MessageEmbed()
            .setColor('#cf0404')
            .setAuthor(`Há um problema!`, client.user.displayAvatarURL())
            .setDescription(`❗ O volume deve ser um valor entre 0 e 10!`)
            return msg.channel.send(InvalidVol2);
        }
        else if (lang == 3) {
            const InvalidVol3 = new MessageEmbed()
            .setColor('#cf0404')
            .setAuthor(`¡Hay un problema!`, client.user.displayAvatarURL())
            .setDescription(`❗ ¡El volumen debe tener un valor entre 0 y 10!`)
            return msg.channel.send(InvalidVol3);
        }
    }
    queue.dispatcher.setVolume(volume/10);
    queue.volume = volume;
    client.queues.set(msg.guild.id, queue);
    if (lang == null) {
        const ChangedVol1 = new MessageEmbed()
        .setColor('#4e86cf')
        .setAuthor(`Changed volume!`, client.user.displayAvatarURL())
        .setDescription(`✅ The volume has been changed succesfully!`)
        return msg.channel.send(ChangedVol1);
    }
    else if (lang == 2) {
        const ChangedVol2 = new MessageEmbed()
        .setColor('#4e86cf')
        .setAuthor(`Volume alterado!`, client.user.displayAvatarURL())
        .setDescription(`✅ O volume foi alterado com sucesso!`)
        return msg.channel.send(ChangedVol2);
    }
    else if (lang == 3) {
        const ChangedVol3 = new MessageEmbed()
        .setColor('#4e86cf')
        .setAuthor(`¡Volumen cambiado!`, client.user.displayAvatarURL())
        .setDescription(`✅ ¡El volumen se ha cambiado con éxito!`)
        return msg.channel.send(ChangedVol3);
    }
};

module.exports = {
    name: "volume/vol",
    help: "Adjusts the volume on a scale from 0 to 10!",
    execute,
};