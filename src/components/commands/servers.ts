import { Message } from 'eris'
import { Server } from '../../types/ploi'
import { apiFetcher } from '../../utils/apiFetch'
import { bot } from '../../utils/constants'

export const serversList = (msg: Message) => {

  const res = apiFetcher('/servers', msg)
  let fields = [
    { name: '#', value: '', inline: true },
    { name: 'Name', value: '', inline: true },
    { name: 'status', value: '', inline: true },
  ]

  res.then(content => {
    content.data.forEach((server: Server) => {
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

export const singleServer = (msg: Message, serverId: string) => {

  const res = apiFetcher(`/servers/${serverId}`, msg)

  res.then(content => {
    const server: Server = content.data

    let fields = [
      { name: '#', value: `${server.id}`, inline: true },
      { name: 'IP Address', value: `${server.ip_address}`, inline: true },
      { name: 'type', value: `${server.type}`, inline: true },
      { name: 'SSH Port', value: `${server.ssh_port}`, inline: true },
      { name: 'Status', value: `${server.status}`, inline: true },
      { name: 'PHP Version Installed', value: `${server.installed_php_versions}`, inline: true },
      { name: 'MySQL Version', value: `${server.mysql_version}`, inline: true },
      { name: 'Total Sites', value: `${server.sites_count}`, inline: true },
      { name: 'Monitoring enabled', value: `${server.monitoring}`, inline: true },
      { name: 'Created At', value: `${server.created_at}`, inline: true },
    ]

    let responseMessage = {
      embed: {
        title: 'Ploi Single server listing',
        url: 'https://ploi.io/panel/servers',
        description: 'The list of your servers in your account',
        fields: fields
      }
    }

    bot.createMessage(msg.channel.id, responseMessage).catch((err: any) => console.log(err))
  
  })

}