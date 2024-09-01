exports.run = (client, message, args, ops) => {

    let fetched = ops.active.get(message.guild.id);

    if (!fetched) return message.channel.send('There is no music playing!');

    if (message.member.voice.channel !== message.guild.me.voice.channel) return message.channel.send('You must be in a voice channel with the bot!');

    if (fetched.dispatcher.paused) return message.channel.send('The music is already paused!');

    fetched.disptacher.pause();

    message.channel.send(`Successfully paused ${fetched.queue[0].songTitle}`);

}

module.exports.help ={
    name: "pause", 
    aliases: []
  }