const TelegramBot = require('node-telegram-bot-api');

const token = '9032118570:AAFkYZIDGoJbF7pKcHtZGkEM727zEEc6upE';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const userName = msg.from.first_name || 'صديقي';

  bot.sendMessage(chatId, `مرحباً ${userName}! أنا بوت حاميدو، وصلتنِي رسالتك بنجاح.`);
});
