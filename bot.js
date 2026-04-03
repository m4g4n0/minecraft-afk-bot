const mineflayer = require('mineflayer')

function createBot(){

const bot = mineflayer.createBot({
  host: 'terra-dos-cubos.aternos.me',
  port: 55157,
  username: 'BotAFK',
})

bot.on('spawn', () => {

console.log('Bot entrou no servidor')

setInterval(() => {

bot.setControlState('jump', true)

setTimeout(() => {
bot.setControlState('jump', false)
}, 500)

}, 5000)

})

bot.on('end', () => {
console.log('Reconectando...')
setTimeout(createBot, 5000)
})

}

createBot()
