const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (client, msg) => {
    var string = '';
    client.commands.forEach(command => {
        if(command.help) {
            string = string + '\n' + `**${process.env.PREFIX}${command.name}:** ${command.help}`;
        }
    });
    let help = new MessageEmbed()
    .setColor('#4e86cf')
    .setAuthor(`HELP!`, client.user.displayAvatarURL())
    .setDescription(string)
    return msg.channel.send(help);
};

module.exports = {
    name: "help",
    execute,
}