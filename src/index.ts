import { Client, Intents } from "discord.js";

require("dotenv").config();

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const TOKEN = process.env.TOKEN;

client.on("message", (message) => {
  if (message.author.bot) {
    return;
  }
  if (message.content === "hello") {
    message.channel.send("hello, world!");
  }
});

client.login(TOKEN);
