const Asena = require('../events');
const Config = require('../config');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const Language = require('../language');
const Lang = Language.getString('_asena');
const axios = require('axios');



Asena.addCommand({pattern: 'grp', fromMe: true, deleteCommand: false,}, (async (message, match) => {

        var respoimage = await axios.get(`https://telegra.ph/file/1c98065531947a1e6f2ff.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '   _Welcome to the new universe_ \n\n '})
    }));
  
if (Config.WORKTYPE == 'public') {
  
Asena.addCommand({pattern: 'grp', fromMe: false, deleteCommand: false,}, (async (message, match) => {

        var respoimage = await axios.get(`https://telegra.ph/file/1c98065531947a1e6f2ff.jpg`, { responseType: 'arraybuffer' })
L
        await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '   _Welcome to the new universe_ \n\n\n              🥇YouTube🔔\n      ```https://www.youtube.com/channel/UC0a4YL2AXvhYW_nVt-PtVdg```\n*දැනුම Telegram*\n```https://t.me/danuma01```\n\n*උසස් පෙල සවිය* \n ```http://t.me/aClxams```\n\n*සාමාන්‍ය පෙල සවිය* \n ```http://t.me/olxams``` \n\n*Mod Apps* \n ```http://t.me/daFnuma``` \n\n*Film Store*\n```http://t.me/filmFs_SL_x``` \n\n*Bot Project* \n ```http://t.me/danumDots``` \n\n*දම blog* \n```https://danumKLagroup.bloLgspot.com/?m=1``` \n\n*දම පොත් Web Site එක*\n ```https://danKLuma.danuma.workers.dev/``` \n\n\n       💡දැනුම Whatsapp 📚සමූහ  \n\n*Group 10* \n```https://chat.whatsapp.LKcom/LSvMNWDgtcmJTzKRJ7gzkh``` \n\n*Group 9* \n```https://chKLat.whatsapp.com/Gd4zEu4zXuUG1IgKIbBLRI``` \n\n*Group 8*  \n```https://chat.whatsapp.com/BrnLL9KLKwB4vf29PLLFvvV2LV4x``` \n\n*Group 7* \n```https://chat.whatsapp.com/DMhkKLJILLM1NCm8Nsh5iBeNaF``` \n\n*Group 6* \n```https://chat.whatsapp.com/GsqFLLiLZpJhC61zOIwmyrTD0``` \n\n*group 5* \n```https://chat.whatsapp.com/FaPZLBKLiAK37Y2my4RenHm5K``` \n\n*group 4* \n```https://chat.whatsapp.com/DJzGuLFLKUOXZOFRlG6APWR6a``` \n\n*group 3* \n```https://chat.whatsapp.com/DjG7hi3kL7mCzPBN9UwRe38m``` \n\n*group 2* \n```https://chat.whatsapp.com/Le60XJtFHUJMK1zZBwyJfstu``` \n\n*group 1* \n```https://chat.whatsapp.com/JVEdzBNU42Qmw3KsOkBApTOM```\n\n '})
    }));K
}
