module.exports = {
    name: 'hello',
    help: 'say hi and then I will answer you! | >hello"',
    execute(bot, message, args){

        //Options of differents answers that you can get
        var answer = [
            "What's up?",
            "Heey, nice to meet you!",
            "It's always a pleasure to see you around!",
            "Hi, glad to meet you!"
        ];

        var random = Math.floor(Math.random() * answer.length);
        var randomElement = answer[random];

        //console.log(randomElement)
        message.reply(`${randomElement}`)
    }
}