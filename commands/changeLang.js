const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (client, msg, args, lang) => {
    language = parseInt(args[0], 10);

    if (language == 1) {
        //English
        const changeToEng = new MessageEmbed()
        .setColor('#4e86cf')
        .setAuthor(`Changed language!`, client.user.displayAvatarURL())
        .setDescription(`:flag_us: English successfully defined!`)
        msg.channel.send(changeToEng);
        return language = null;
    }
    else if (language == 2) {
        //Brazilian portuguese
        const changeToPorBR = new MessageEmbed()
        .setColor('#4e86cf')
        .setAuthor(`Linguagem alterada!`, client.user.displayAvatarURL())
        .setDescription(`:flag_br: Português brasileiro definido com sucesso!`)
        msg.channel.send(changeToPorBR);
        return language = 2;
    }
    else if (language == 3) {
        //Spanish
        const changeToSpan = new MessageEmbed()
        .setColor('#4e86cf')
        .setAuthor(`¡Idioma cambiado!`, client.user.displayAvatarURL())
        .setDescription(`:flag_ea: ¡Español definido con éxito!`)
        msg.channel.send(changeToSpan);
        return language = 3;
    }
    else {
        if (lang == 1 || lang == null) {
            const InvalidVol1 = new MessageEmbed()
            .setColor('#cf0404')
            .setAuthor(`There's a problem!`, client.user.displayAvatarURL())
            .setDescription(`❗ Please enter a valid language!\n
1. :flag_us: English
2. :flag_br: Brazilian portuguese
3. :flag_ea: Spanish`)
            return msg.channel.send(InvalidVol1);
        }
        else if (lang == 2) {
            const InvalidVol2 = new MessageEmbed()
            .setColor('#cf0404')
            .setAuthor(`Há um problema!`, client.user.displayAvatarURL())
            .setDescription(`❗ Por favor insira um idioma válido!\n
1. :flag_us: English
2. :flag_br: Brazilian portuguese
3. :flag_ea: Spanish`)
            return msg.channel.send(InvalidVol2);
        }
        else if (lang == 3) {
            const InvalidVol3 = new MessageEmbed()
            .setColor('#cf0404')
            .setAuthor(`Hay un problema!`, client.user.displayAvatarURL())
            .setDescription(`❗ ¡Ingrese un idioma válido!\n
1. :flag_us: English
2. :flag_br: Brazilian portuguese
3. :flag_ea: Spanish`)
            return msg.channel.send(InvalidVol3);
        }
    }
};

module.exports ={
    name: "lang",
    help: "Change the language!",
    execute,
}