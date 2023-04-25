const fs = require('fs')
const chalk = require('chalk')
//==============================\
global.sapi = 'Cry Baby'
global.owner = ['6285740392651']
global.ownernomer = "6285740392651"
//===============================\\
global.wms = '6285740392651'
global.packname = 'DetoxBotz'
global.ownerlen = "Cry Baby"
global.ownername = "Xezz"
global.footer = 'DetoxBotz'
global.ytname = "YT: lenttobs"
global.socialm = "IG: vlntncptr"
global.location = "Indonesia, Jawatengah, Banyumas"
global.premium = ['6285740392651'] 
global.nomorcs = '6283133778186'
global.botname = 'DetoxBotz' 
global.linkz = "-"
global.websitex = "-"
global.themeemoji = "🔥"
global.packname = "Sticker By"
global.author = "Made by DetoxBotz"
global.wm = "Cry Xezz"
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.mess = {
    premime: 'Premium Special Features If You Want to Register Type Rent',
    bot: 'This feature could be used by bot only',
    linkm: 'Where is the link?',
}
global.thum = fs.readFileSync("./gambar/maslent.jpg")
global.log0 = fs.readFileSync("./gambar/maslent.jpg")
global.err4r = fs.readFileSync("./gambar/maslent.jpg")
global.thumb = fs.readFileSync("./gambar/maslent.jpg")
global.limitawal = { //limit ges
    premium: "UNLIMITED",
    free: 50
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
