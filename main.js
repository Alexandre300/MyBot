const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  console.log("Ready")
})

bot.login('Mzk3MTE1OTMyNTE2MDI0MzIw.DSrS9w.WrQE16ykoPAoL808hZ71SwcGS6A');

bot.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong !')
  }
})

