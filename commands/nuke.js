const Discord = require('discord.js')
const fs = require("fs");

module.exports.run = async (client, message, args) => {
    if (!args[0]) {
        let embed = new Discord.MessageEmbed()
            .setTitle("Simple way to remove the server members")
            .setColor('RANDOM')
        message.channel.send(embed)
    }
}
module.exports.help = {
   name: "nuke", 
   aliases: []
   
}