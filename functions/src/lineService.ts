import { Client, Message } from "@line/bot-sdk"
import * as  qs  from 'querystring'
import axios from 'axios'

import { LINE } from "./chatbotConfig"

export const toTextMessage = (message: string): Message => {
    const textMessage: Message = {
        type: "text",
        text: message
    }
    return textMessage
}

export const pushMessage = async (userId: string, lineMessage: Message | Message[]):Promise<any> => {
    const accessToken = await getAccessToken()
    const lineClient = new Client({
        channelAccessToken: accessToken
    })
    return lineClient.pushMessage(userId, lineMessage)
}

export const replyMessage = async (replyToken: string, lineMessage: Message | Message[]): Promise<any> => {
    const accessToken = await getAccessToken()
    const lineClient = new Client({
        channelAccessToken: accessToken
    })
    return lineClient.replyMessage(replyToken, lineMessage)
}

const getAccessToken = async (): Promise<string> => {
    let accessToken
    const apiUrl = `https://api.line.me/v2/oauth/accessToken`
    const requestConfig = {
        headers: {
            "content-type": "application/x-www-form-urlencoded"
        }
    }

    const body = {
        "grant_type": "client_credentials",
        "client_id": LINE.channelId,
        "client_secret": LINE.channelSecret
    }

    return axios.post(apiUrl, qs.stringify(body), requestConfig).then(result => {
        accessToken = result.data.access_token
        return accessToken
    }).catch(null)
}
