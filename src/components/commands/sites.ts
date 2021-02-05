import { apiFetcher } from '../../utils/apiFetch'
import { Site } from '../../types/ploi'
import { bot } from '../../utils/constants'
import { Message } from 'eris'

export const sitesList = (msg: Message, serverId: String) => {

  const res = apiFetcher(`/servers/${serverId}/sites`, msg)
  let fields = [
    { name: '#', value: '', inline: true },
    { name: 'Domain', value: '', inline: true },
    { name: 'Last deployed', value: '', inline: true },
  ]

  res.then(content => {
    content.data.forEach((site: any) => {
      fields[0].value += `${site.id}\n`
      fields[1].value += `[${site.domain}](https://${site.domain})\n`
      fields[2].value += `${site.last_deploy_at}\n`
    })

    let responseMessage = {
      embed: {
        title: 'Ploi Sites listing',
        url: 'https://ploi.io/panel/sites',
        description: 'The list of your sites of a single server in your account',
        fields: fields
      }
    }

    bot.createMessage(msg.channel.id, responseMessage).catch((err: any) => console.log(err))
  })
}

export const singleSite = (msg: Message, serverId: String, siteId: String) => {

  const res = apiFetcher(`/servers/${serverId}/sites/${siteId}`, msg)
  
  res.then(content => {
    let site: Site = content.data;

    let fields = [
      { name: '#', value: `${site.id}`, inline: true },
      { name: 'Domain', value: `${site.domain}`, inline: true },
      { name: 'Last deployed', value: `${site.last_deploy_at}`, inline: true },
      { name: 'System User', value: `${site.system_user}`, inline: true },
      { name: 'Status', value: `${site.status}`, inline: true },
      { name: 'PHP Version', value: `${site.php_version}`, inline: true },
      { name: 'Last depoloyed', value: `${site.last_deploy_at}`, inline: true },
      { name: 'Created At', value: `${site.created_at}`, inline: true },
      { name: 'Deploy Script', value: `${site.deploy_script}` },
    ]

    let responseMessage = {
      embed: {
        title: 'Ploi Single Site listing',
        url: `https://ploi.io/panel/servers/${serverId}/sites/${siteId}`,
        description: `[${site.domain}](https://${site.domain})`,
        fields: fields
      }
    }

    bot.createMessage(msg.channel.id, responseMessage).catch((err: any) => console.log(err))
  })
}