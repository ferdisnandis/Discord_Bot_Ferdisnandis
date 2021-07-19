const Discord = require('discord.js');

module.exports = {
    name: 'kiss',
    help: 'Send a kiss to someone on the server',
    execute(bot, message, args) {

        var list = [
            'https://media.tenor.com/images/1fca9cf74898cc8448caae3166b8afb8/tenor.gif',
            'http://i2.tagstat.com/p1/0/qXOmZVwuPa2g9BZwJpkVWnXmnjQdasFfTon5PJ71EJHSJPmBAxEmEw==.gif',
            'https://uploads.spiritfanfiction.com/fanfics/capitulos/202003/gravido-de-um-estranho-yoonkook-18683922-060320200812.gif',
            'https://i.pinimg.com/originals/a2/b2/a4/a2b2a46aef7e20955412b15ffff1a9ce.gif',
            'https://storage.googleapis.com/dandresstorage8.appspot.com/gif/folders/gif/343.gif',
            'https://i.pinimg.com/originals/85/ef/74/85ef7400d4418a4afe80470719dbafd5.gif'
        ];

        var rend = list[Math.floor(Math.random() * list.length)];
        let user = message.mentions.users.first() || bot.users.cache.get(args[0])

        if (!user) {
            return message.reply("Don't forget to mention the user for a kiss!")
        }

        let avatar = message.author.displayAvatarURL({ format: "png" })
        const embed = new Discord.MessageEmbed()
            .setTitle('**ALERT:** new Kiss!')
            .setColor('#A41EDB')
            .setDescription(`${message.author} gave ${user} a kiss!`)
            .setImage(rend)
            .setTimestamp()
            .setThumbnail(avatar)
            .setFooter('How cute!')
            .setAuthor(message.author.tag, avatar)
        message.channel.send(embed)
    }
}