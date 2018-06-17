var TelegramBot = require ('node-telegram-bot-api');
	TOKEN = '537712394:AAEGc7ODYbgXFL8gvXhJddBZNk7tiC889E0';

console.log('Bot has been started ....');

const bot = new TelegramBot(TOKEN, {
  polling: true,

});

bot.on('message', function(msg){
	var id = msg.from.id;
	bot.sendMessage(id, msg.text);
	//console.log(msg);
})
