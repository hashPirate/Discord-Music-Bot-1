const Discord = require('discord.js')
const fs = require("fs");

module.exports.run = async (client, message, args) => {
    if (!args[0]) {
        let embed = new Discord.MessageEmbed()
            .setTitle("Imperial Music Bot Commands")
            .setColor('RANDOM')
            .setThumbnail(client.user.avatarURL)
            .setDescription("These are the Imperial Music Bot commands.")
            .addField("Avaliable", "avatar, help, ping, nuke, play (needs some tweaks), leave, queue, skip, pause, resume")
            .addField("Planned", "join, forceskip, anthem, clear")
            .setFooter("If you have any commands you want to see added contact me and I will try to add them.")
        message.channel.send(embed)
    }
}
module.exports.help = {
   name: "help", 
   aliases: []
   
}