import * as lineService from "./lineService"
// import * as weChatService from "./weChatService"
import { DialogMessage } from "./appsModel"


export const pushMessage = (dialogMessage: DialogMessage) => {
    if (dialogMessage.channel == "Line") {
        const lineMessage = lineService.toTextMessage(dialogMessage.replyMessage)
        lineService.pushMessage(dialogMessage.userId, lineMessage)
    }
    else if (dialogMessage.channel == "WeChat") {
        // const weChatMessage = weChatService.toTextMessage(dialogMessage.userId, dialogMessage.replyMessage)
        // weChatService.pushMessage(weChatMessage)
    }
}
