const Discord = require('discord.js')
const fs = require('fs')

const bot = new Discord.Client()
bot.commands = new Discord.Collection()
bot.queues = new Map()

const { token, prefix } = require('./config.json')
//Login
bot.login(token)

//Send message on console when it's online
bot.once("ready", () => {
    console.log("Ready for work, let's go!")
})

//Set bot status/activities
bot.on('ready', () => {
    //Activities: It changes from time to time
    let activities = [
        'My Prefix is >',
        'If you need help use >help'
    ],
        i = 0;
    setInterval(() => bot.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: 'WATCHING'
    }), 1000 * 60)
    //Status: online
    bot.user.setStatus('online')
})

//Youtube
const ytdl = require('ytdl-core')
const streamOption = { seek: 0, volume: 1 }

//Looking for commands in the folder / files
const commandFolders = fs.readdirSync('./commands')
for (const folder of commandFolders) {
    commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'))
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`)
        bot.commands.set(command.name, command)
    }
}

//Message commands 
bot.on("message", async function (message) {
    //Verify if the message start with the prefix
    if (!message.content.startsWith(prefix)) return;
    //Doesn't include the prefix in the command
    const commandBody = message.content.slice(prefix.length)
    //Identify space if I need some information
    const args = commandBody.split(' ');
    //Standardize upper and lowercase letters
    const command = args.shift().toLowerCase();

    //Search the command and run
    if (!bot.commands.has(command)) return
    try {
        bot.commands.get(command).execute(bot, message, args);
    } catch (error) {
        console.log(error)
        message.reply("Wait a minute, there's something wrong here...")
    }
})