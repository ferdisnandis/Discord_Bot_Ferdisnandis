const execute = (bot, msg, args) => {
    let string = "**===== HELP =====**\n\n";
    bot.commands.forEach((command) => {
      if (command.help) {
        string += `**${command.name}**: ${command.help}\n`;
      }
    });
    return msg.channel.send(string);
  };
  
  module.exports = {
    name: "help",
    help: "Show all commands | >help",
    execute,
  };