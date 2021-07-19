const Discord = require('discord.js');

module.exports = {
    name: 'slap',
    help: 'Slap (virtually) someone on the server',
    execute(bot, message, args) {

        var list = [
            'https://media.tenor.com/images/d3a424b670823f1a92ab8dbc35d1e935/tenor.gif',
            'https://bolojawan.com/wp-content/uploads/2017/08/giphy-2.gif',
            'https://media.giphy.com/media/l2QEgAHt1gPBLIfp6/giphy.gif',
            'https://i.gifer.com/7Kp.gif',
            'https://media.giphy.com/media/jEYH3RJVXK8Ba/giphy.gif',
            'https://i.pinimg.com/originals/3e/d6/1b/3ed61b7a26f029602d6813a069157a19.gif',
            'https://thumbs.gfycat.com/AgedThunderousDwarfrabbit-max-1mb.gif'
        ];

        var rend = list[Math.floor(Math.random() * list.length)];
        let user = message.mentions.users.first() || bot.users.cache.get(args[0])

        if (!user) {
            return message.reply("Don't forget to mention the user for a slap!")
        }

        let avatar = message.author.displayAvatarURL({ format: "png" })
        const embed = new Discord.MessageEmbed()
            .setTitle('**ALERT:** SLAP!!!')
            .setColor('red')
            .setDescription(`${message.author} gave ${user} a slap!`)
            .setImage(rend)
            .setTimestamp()
            .setThumbnail(avatar)
            .setFooter('That was brutal!!')
            .setAuthor(message.author.tag, avatar)
        message.channel.send(embed)
    }
}