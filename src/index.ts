import 'dotenv/config'
import { bot } from './utils/constants'
import { commands } from './components/commands'

bot.on('messageCreate', (msg) => {
  commands(msg)
})

bot.connect()