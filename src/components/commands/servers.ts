import { apiFetcher } from '../../utils/apiFetch'
import { bot } from '../../utils/constants'

export const serversList = (msg: { content: string; channel: { id: string } }) => {

  const res = apiFetcher('/servers')
  let fields = [
    { name: '#', value: '', inline: true },
    { name: 'Name', value: '', inline: true },
    { name: 'status', value: '', inline: true },
  ]

  res.then(content => {
    content.data.forEach((server: any) => {
      fields[0].value += `${server.id}\n`
      fields[1].value += `${server.name}\n`
      fields[2].value += `${server.status}\n`
    })

    let responseMessage = {
      embed: {
        title: 'Ploi Server listing',
        url: 'https://ploi.io/panel/servers',
        description: 'The list of your servers in your account',
        fields: fields
      }
    }

    bot.createMessage(msg.channel.id, responseMessage).catch((err: any) => console.log(err))
  })
}