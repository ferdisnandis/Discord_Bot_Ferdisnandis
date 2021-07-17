const playSong = require("./play").playSong;

const execute = (bot, msg, args) => {
  const queue = bot.queues.get(msg.guild.id);
  if (!queue) {
    return msg("There is no music playing!");
  }
  queue.songs.shift();
  bot.queues.set(msg.guild.id, queue);
  playSong(bot, msg, queue.songs[0]);
  //console.log(queue.songs)
  if(!queue.songs[0]){
    return
  } else {
    msg.channel.send(`Next Song: ${queue.songs[0].title}`)
  }
};

module.exports = {
  name: "skip",
  help: "Skip to the next song | >skip",
  execute,
};