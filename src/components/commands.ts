import { serversList } from './commands/servers'

export const commands = (msg: { content: string; channel: { id: string } }) => {

    if (msg.content.search('!servers') === 0) {
        serversList(msg)
    }

}