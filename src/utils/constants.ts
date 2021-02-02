import { Client as DiscordClient } from 'eris'

export const bot = new DiscordClient(process.env.BOT_TOKEN as string)