// import * as Cache from 'node-cache'
// import { WECHAT } from './chatbotConfig'
// import axios from 'axios'
//
// export const toTextMessage = (userId: string, message: string) => {
//     const textMessage = {
//         touser: userId,
//         msgtype: "text",
//         text: { content: message }
//     }
//     return textMessage
// }
//
// export const pushMessage = async (wechatMessage): Promise<any> => {
//     const accessToken = await getAccessToken()
//     const pushMessageUrl = `https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=${accessToken}`;
//     return axios.post(pushMessageUrl, wechatMessage)
// }
//
// export const replyMessage = (res, wechatMessage): Promise<any> => {
//     return res.reply(wechatMessage.text.content)
// }
//
// const getAccessToken = async (): Promise<string> => {
//     let accessToken
//     const apiUrl = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${WECHAT.appid}&secret=${WECHAT.appSecret}`
//     return axios.get(apiUrl).then(result => {
//         accessToken = result.data.access_token
//         return accessToken
//     })
//
// }
