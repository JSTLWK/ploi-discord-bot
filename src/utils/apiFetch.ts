import fetch from 'node-fetch'
import { Response } from '../types/response'

export const apiFetcher = async (apiPath: string | null): Promise<Response> => {

    return fetch(`${process.env.PLOI_URL}${apiPath}`, {
        headers: {
            'Authorization': `Bearer  ${process.env.PLOI_BEARER}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
  }