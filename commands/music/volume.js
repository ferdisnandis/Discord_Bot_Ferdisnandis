const execute = (bot, message, args) => {
    const queue = bot.queues.get(message.guild.id);

    if(!queue){
        return message.reply("There is no music playing!");
    }

    const volume = Number(args.join(" "))
    if(isNaN(volume) || volume < 0 || volume > 10){
        return message.reply("The volume must be between 1 and 10!") 
    }

    queue.dispatcher.setVolume(volume/10)
    queue.volume = volume;
    bot.queues.set(message.guild.id, queue)
}

module.exports = {
    name: "volume",
    help: "Change the music volume | >volume [number]",
    execute
}