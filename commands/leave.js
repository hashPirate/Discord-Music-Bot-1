exports.run = async (client, message, args, ops) => {

    if (!message.member.voice.channel) return message.channel.send('You must connect to a voice channel!');

    if (!message.guild.me.voice.channel) return message.channel.send('I am not in a voice channel!');

    if (message.guild.me.voice.channelID !== message.member.voice.channelID) return message.channel.send('You must be in a voice channel!');

    message.guild.me.voice.channel.leave();

    message.channel.send('Goodbye!');

}

module.exports.help ={
    name: "leave",
    aliases: []
}