const execute = (bot, message, args) => {
    const queue = bot.queues.get(message.guild.id);

    if(!queue){
        return message.reply("There is no music playing!")
    } else {
        queue.songs = []
        bot.queues.set(message.guild.id, queue)
        queue.dispatcher.end()
    }
}

module.exports = {
    name: "stop",
    help: "Stop playing music | >stop",
    execute,
}