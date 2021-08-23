/**
  * @INFO
  * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js
  * @INFO
  * Work for Milrato Development | https://milrato.eu
  * @INFO
  * Please mention Him / Milrato Development, when using this Code!
  * @INFO
*/
//Importing all needed Commands
const Discord = require("discord.js"); //this is the official discord.js wrapper for the Discord Api, which we use!
const colors = require("colors"); //this Package is used, to change the colors of our Console! (optional and doesnt effect performance)
const Enmap = require("enmap"); //this package is our Database! We will use it to save the data for ever!
const fs = require("fs"); //this package is for reading files and getting their inputs

//Creating the Discord.js Client for This Bot with some default settings ;) and with partials, so you can fetch OLD messages
const client = new Discord.Client({
  fetchAllMembers: false,
  restTimeOffset: 0,
  shards: "auto",
  restWsBridgetimeout: 100,
  disableEveryone: true,
  partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
//Loading discord-buttons
const dbs = require('discord-buttons');
dbs(client);

//Loading files, with the client variable like Command Handler, Event Handler, ...
["clientvariables", "command", "events", "erelahandler"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.settings = new Enmap({ name: "setups", dataDir: "./databases/settings" })

//login into the bot
client.login(require("./botconfig/config.json").token);
/**
  * @INFO
  * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js
  * @INFO
  * Work for Milrato Development | https://milrato.eu
  * @INFO
  * Please mention Him / Milrato Development, when using this Code!
  * @INFO
*/


process.on('unhandledRejection', (reason, p) => {
  console.log('=== unhandled Rejection ==='.toUpperCase());
  console.log('Promise: ', p , 'Reason: ', reason.stack ? reason.stack : reason);
  console.log('=== unhandled Rejection ==='.toUpperCase());
});
process.on("uncaughtException", (err, origin) => {
  console.log('=== uncaught Exception ==='.toUpperCase());
  console.log('Origin: ', origin, 'Exception: ', err.stack ? err.stack : err)
  console.log('=== uncaught Exception ==='.toUpperCase());
})
process.on('uncaughtExceptionMonitor', (err, origin) => {
  console.log('=== uncaught Exception Monitor ==='.toUpperCase());
  console.log('Origin: ', origin, 'Exception: ', err.stack ? err.stack : err)
  console.log('=== uncaught Exception Monitor ==='.toUpperCase());
});
process.on('beforeExit', (code) => {
  console.log('=== before Exit ==='.toUpperCase());
  console.log('Code: ', code);
  console.log('=== before Exit ==='.toUpperCase());
});
process.on('exit', (code) => {
  console.log('=== exit ==='.toUpperCase());
  console.log('Code: ', code);
  console.log('=== exit ==='.toUpperCase());
});
process.on('multipleResolves', (type, promise, reason) => {
  console.log('=== multiple Resolves ==='.toUpperCase());
  console.log(type, promise, reason);
  console.log('=== multiple Resolves ==='.toUpperCase());
});