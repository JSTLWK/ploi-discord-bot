import { serversList, singleServer } from './commands/servers'
import { sitesList, singleSite } from './commands/sites'
import { helpCommand, errorMessage } from './commands/global'
import { Message } from 'eris'

export const commands = (msg: Message) => {

  let args = msg.content.split(' ')

  switch (args[0]) {
    case '!help':
      return helpCommand(msg)

    case '!sites':
      if (args.length > 1) {
        return sitesList(msg, args[1])
      }
      return errorMessage(msg, "Arguments missing.", "The command is !sites <serverId>")

    case '!servers':
      return serversList(msg)

    case '!server': 
      if (args.length > 1) {
        return singleServer(msg, args[1])
      }
      return errorMessage(msg, "Arguments missing.", "The command is !server <serverId>")

    case '!site':
      if (args.length > 2) {
        return singleSite(msg, args[1], args[2])
      }
  
      return errorMessage(msg, "Arguments missing.", "The command is !site <serverId> <siteId>")
  }

}