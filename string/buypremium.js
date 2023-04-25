const chalk = require('chalk')
const fs = require('fs')
global.buypremium = `
harga
5 Hari : 2.000
1 Minggu: 3.000
2 minggu : 6.000
3 minggu : 7.000

Payment 

GOPAY : -
DANA : 6285740392651
OVO : 6285740392651
PULSA : 6283133778186
SAWERIA : https://saweria.co/bersedekahbro

Benefit?
unli Limit
bebas akses Feature prem
`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})