exports.run = (client, message, args, ops) => {

    let fetched = ops.active.get(message.guild.id);

    if (!fetched) return message.channel.send('There is no music playing!');

    if (message.member.voice.channel !== message.guild.me.voice.channel) return message.channel.send('You must be in a voice channel!');

    if (!fetched.dispatcher.paused) return message.channel.send('The music is not paused!');

    fetched.disptacher.resume();

    message.channel.send(`Successfully resume ${fetched.queue[0].songTitle}`);

}

module.exports.help ={
    name: "resume", 
    aliases: []
  }