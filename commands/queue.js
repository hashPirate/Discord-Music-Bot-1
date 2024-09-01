exports.run = async (client, message, args, ops) => {

    let fetched = ops.active.get(message.guild.id);

    if (!fetched) return message.channel.send('There is nothing being played right now!');

    let queue = fetched.queue
    let nowPlaying = queue[0];

    let resp = `__**Now playing**__\n**${nowPlaying.songTitle}** -- **Requested by:** ${nowPlaying.requestor}\n\n__**Queue**__\n`;

    for (var i = 1; i < queue.length; i++) {
        resp += `${i}. **${queue[i].songTitle}** -- **Requested by:** ${queue[i].requester}\n`;
    }

    message.channel.send(resp);

}

module.exports.help ={
    name: "queue", 
    aliases: ["q"]
  }