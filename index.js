const TelegramBot = require('node-telegram-bot-api');

const token = 'token'; // You token
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg, match) => {
    var message = 'Привет ' + msg.chat.last_name + ' ' + msg.chat.first_name;

    bot.sendMessage(msg.chat.id, message);
});