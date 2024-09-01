module.exports.run = async (client, message, args, ops) => {

    let fetched = ops.active.get(message.guild.id);

    if (!fetched) return message.channel.send('There isn\'t any music player!');

    if (message.member.voice.channel !== message.guild.me.voice.channel) return message.channel.send('Sorry, you aren\'t in the same channel as the bot!');

    let userCount = message.member.voice.channel.members.size;

    let required = Math.ceil(userCount/2);

    if (!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];

    if (fetched.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`Sorry, you already voted! ${fetched.queue[0].voteSkips.length}/${required} required`);

    fetched.queue[0].voteSkips.push(message.member.id);

    ops.active.set(message.guild.id, fetched);

    if (fetched.queue[0].voteSkips.length >= required) {

        message.channel.send('Successfully skipped the song!');

        return fetched.dispatcher.emit('finish');

    }

    message.channel.send(`Successfully skipped the song! ${fetched.queue[0].voteSkips.length}/${required} required`);

  }
  
  module.exports.help ={
    name: "skip", 
    aliases: ["s"]
  }