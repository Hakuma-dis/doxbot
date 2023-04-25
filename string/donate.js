const chalk = require('chalk')
const fs = require('fs')
global.donate = `
GOPAY :-
DANA :6285740392651
OVO :6285740392651
PULSA :6283133778186
SAWERIA :https://e.top4top.io/m_234403ua01.mp4`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})