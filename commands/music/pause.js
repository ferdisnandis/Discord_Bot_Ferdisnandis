const execute = (bot, message, args) => {
    const queue = bot.queues.get(message.guild.id);

    if(!queue){
        return message.reply("There is no music playing!")
    } else {
        queue.dispatcher.pause()
    }
}

module.exports = {
    name: "pause",
    help: "Pause the current song | >pause",
    execute,
}