const config = require("./functions/config");
const Discord = require('discord.js');
const bot = new Discord.Client();

let TOKEN = "";
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
const readkey = prompt => {
    return new Promise((resolve, reject) => {
      rl.question(prompt, resolve)
    })
}


(async () => {
    TOKEN = await readkey(`PW(to set new: "setnew"): `);

    if (TOKEN === "setnew") {
        TOKEN = await readkey(`NEW PW: `);
        config.setConfig("TOKEN", "yourtoken", true, TOKEN)
    }
    
    bot.login(config.getConfig("TOKEN", true, TOKEN));
})()