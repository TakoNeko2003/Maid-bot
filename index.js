const Discord = require('discord.js')
const bot = new Discord.Client()

bot.login(process.env.TOKEN)

bot.on('message', function (message) {
    if (message.content === 'Bonjour') {
        message.reply ('Irasshaimase!!^^ Voulez-vous du thé ou un café?')
    }
})

bot.on ('ready', function () {
bot.user.setGame('Servir le thé').catch(console.error)
})
