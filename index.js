const Discord = require("discord.js");
const dotenv = require("dotenv");
const db = require("quick.db");
const fs = require("fs");
const path = require("path");
const play = require("./commands/play");
const help = require("./commands/help");
const rp = require("./commands/resumePause");
const stop = require("./commands/stop");
const skip = require("./commands/skip");
const volume = require("./commands/volume");
const queue = require("./commands/queue");
const clear = require("./commands/clear");
const obliterate = require("./commands/obliterate");
const cuddle = require("./commands/cuddle");
const kiss = require("./commands/kiss");
const avatar = require("./commands/avatar");
const changeLang = require("./commands/changeLang");
const ship = require("./commands/ship");
const MessageEmbed = require("discord.js").MessageEmbed;

dotenv.config();

let loopValue = null;
let lang = null;
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.queues = new Map();

const commandFiles = fs
    .readdirSync(path.join(__dirname,"/commands"))
    .filter((filename) => filename.endsWith(".js"));

for(var filename of commandFiles) {
    const command = require(`./commands/${filename}`);
    client.commands.set(command.name,command);
}

client.on("ready", function() {
    console.log(`Bot foi iniciado, em ${client.guilds.cache.size} servidores.`);
    client.user.setPresence({
        status: 'online',
        activity: {
            name: `█▀ Atualmente em ${client.guilds.cache.size} servidores ⠀⠀⠀⠀⠀⠀⠀⠀Peça ajuda com: ${process.env.PREFIX}help ▄█`,
            type: "PLAYING",
            url: 'https://discord.com/oauth2/authorize?=&client_id=882361033841324143&scope=bot&permissions=8'
            /*https://is.gd/dnWoxK*/
        }
    })
});

client.on("guildCreate", guild => {
    console.log(`O bot entrou no servidor : ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`);
});

client.on("guildDelete", guild => {
    console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id})`);
});

client.on("message", async (msg) => {

    if(!msg.content.startsWith(process.env.PREFIX || msg.author.client)) return;
    const args = msg.content.slice(process.env.PREFIX.length).split(" ")
    const command = args.shift();
    const mentioned = msg.mentions.users.first()

    if (command == "play" || command == "p") {
        play.execute(client, msg, args, lang);
    }
    else if (command == "rp" || command == "resume" || command == "pause") {
        rp.execute(client, msg, lang);
    }
    else if (command == "stop") {
        stop.execute(client, msg, lang);
    }
    else if (command == "skip") {
        skip.execute(client, msg, lang);
    }
    else if (command == "volume" || command == "vol") {
        volume.execute(client, msg, args, lang);
    }
    else if (command == "queue") {
        queue.execute(client, msg, lang);
    }
    else if (command == "clear" || command == "c") {
        clear.execute(client, msg, args, lang);
    }
    else if (command == "obliterate" || command == "ob") {
        obliterate.execute(client, msg, mentioned, lang);
    }
    else if (command == "kiss") {
        kiss.execute(client, msg, mentioned, lang);
    }
    else if (command == "cuddle") {
        cuddle.execute(client, msg, mentioned, lang);
    }
    else if (command == "avatar") {
        avatar.execute(client, msg, mentioned, lang);
    }
    else if (command == "lang") {
            return lang = changeLang.execute(client, msg, args, lang)
    }
    else if (command == "help") {
        help.execute(client, msg);
    }
    else if (command == "ship") {
        ship.execute(client, msg, mentioned, lang);
    }
    else {
        if (lang == 1 || lang == null) {
            const InvalidCom1 = new MessageEmbed()
            .setColor('#cf0404')
            .setAuthor(`There's a problem!`, client.user.displayAvatarURL())
            .setDescription(`❗ I still don't know this command!`)
            return msg.channel.send(InvalidCom1);
        }
        else if (lang == 2) {
            const InvalidCom2 = new MessageEmbed()
            .setColor('#cf0404')
            .setAuthor(`Há um problema!`, client.user.displayAvatarURL())
            .setDescription(`❗ Eu ainda não conheço esse comando!`)
            return msg.channel.send(InvalidCom2);
        }
        else if (lang == 3) {
            const InvalidCom3 = new MessageEmbed()
            .setColor('#cf0404')
            .setAuthor(`Hay un problema!`, client.user.displayAvatarURL())
            .setDescription(`❗ ¡Todavía no conozco este comando!`)
            return msg.channel.send(InvalidCom3);
        }
    }
});

client.login(process.env.TOKEN);