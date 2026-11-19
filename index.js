const TelegramBot = require('node-telegram-bot-api');
const http = require('http');

const token = '9032118570:AAFkYZIDGoJbF7pKcHtZGkEM727zEEc6upE';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const username = msg.from.first_name || 'صديقي';
  bot.sendMessage(chatId, `أهلاً ${username}! وصلتني رسالتك بنجاح.`);
});

const port = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Hamidobot is running!');
}).listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
