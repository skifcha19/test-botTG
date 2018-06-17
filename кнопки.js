var TelegramBot = require ('node-telegram-bot-api'),
	token = '537712394:AAEGc7ODYbgXFL8gvXhJddBZNk7tiC889E0',
	bot = new TelegramBot(token, {
		polling: true,
	});	

console.log('Bot has been started ....');


bot.on('message', function (msg) {
	var chatId = msg.chat.id;

	switch (msg.text) {
		case '/start':
			start(chatId);
		break;
	}
});

function start(chatId) {
	bot.SendMessage(chatId, 'Начнем игру!\nВаш герой оказался около замка. Что сделать: исследовать замок или исследовать окрестности', {
		reple_markup: JSON.stringify({
			keyboard: [
			['Исследовать окресности'],
			['Исследовать замок']]
		})
	});