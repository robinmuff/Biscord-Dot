const config = require("./functions/config");
const Discord = require('discord.js');
const bot = new Discord.Client();

/*
config.setConfig("TOKEN", "ODE1MjQ0NTEzMTc4MDI2MDE1.YDplng.xtIw7HZ52rlKgjWOT8UfaNfRaBk", true, "MyKey")
*/

bot.login(config.getConfig("TOKEN", true, "MyKey"));

