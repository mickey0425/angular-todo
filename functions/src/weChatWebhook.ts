// const moduleName = "weChatWebhook"
//
// import * as functions from 'firebase-functions'
// import * as wechat from 'wechat'
//
// import { WECHAT } from "./chatbotConfig"
// import * as chatBotDialog from "./chatBotDialog"
// import * as pushService from "./pushService"
//
// import { DialogMessage } from "./appsModel"
//
// export const weChatWebhook = functions.https.onRequest(wechat(WECHAT, (req, res) => {
//     if (req.method.toLowerCase == "get")
//         res.status(200).send(req.query.echostr)
//     else {
//         const event = req.weixin
//
//         console.log(JSON.stringify(event, null, 4));
//         eventDispatcher(event)
//         res.reply("")
//     }
//
// }));
//
// const eventDispatcher = (event) => {
//     if (event.MsgType == "event") {
//         switch (event.Event) {
//             case "subscribe":
//                 subscribe(event.FromUserName)
//                 break
//             case "unsubscribe":
//                 break
//         }
//     }
//     else if (event.MsgType == "text") {
//         const userIntent = event.Content
//         const dialogMessage = {
//             channel: "WeChat",
//             userId: event.FromUserName,
//             userIntent: userIntent,
//         } as DialogMessage
//         chatBotDialog.messageDispatcher(dialogMessage)
//     }
// }
//
// const subscribe = (userId: string) => {
//     const message = `感謝你關注《智能商城》\n你的WeChatId如下:\n${userId}`
//     const dialogMessage = {
//         channel: "WeChat",
//         userId: userId,
//         userIntent: "subscribe",
//         replyMessage: message
//     } as DialogMessage
//     pushService.pushMessage(dialogMessage)
// }
