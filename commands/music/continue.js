const execute = (bot, message, args) => {
    const queue = bot.queues.get(message.guild.id);

    if(!queue){
        return message.reply("There is no music playing!")
    } else {
        queue.dispatcher.resume()
    }
}

module.exports = {
    name: "continue",
    help: "Keep playing music after pause | >continue",
    execute,
}