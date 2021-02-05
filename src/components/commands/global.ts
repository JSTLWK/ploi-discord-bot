import { Message } from 'eris'
import { bot } from '../../utils/constants'

export const helpCommand = (msg: Message) => {

  const helps = [
    { command: "!help", description: "Shows this command with all commands" },
    { command: "!servers", description: "Gives a list of servers you have on your account." },
    { command: "!sites <serverId>", description: "Gives a list of sites on a server." },
    { command: "!site <serverId> <SiteId>", description: "Gives all information regarding an site." },

  ]

  let fields = [
    { name: 'Command', value: '', inline: true },
    { name: 'Description', value: '', inline: true },
  ]

  helps.forEach(element => {
    fields[0].value += `${element.command}\n`
    fields[1].value += `${element.description}\n`
  })

  let responseMessage = {
    embed: {
      title: 'Ploi Discord bot Help',
      url: 'https://github.com/Hoopless/ploi-discord-bot/',
      description: 'Gives you all the help there is regarding this bot. \n Feel free to message me anytime.',
      fields: fields
    }
  }

  bot.createMessage(msg.channel.id, responseMessage).catch((err: any) => console.log(err))

}

export const errorMessage = (msg: Message, errorHeader: string, errorMessage: string) => {


  let responseMessage = {
    embed: {
      title: errorHeader,
      description: errorMessage,
      color: 16724812,
    }
  }

  bot.createMessage(msg.channel.id, responseMessage).catch((err: any) => console.log(err))

} 