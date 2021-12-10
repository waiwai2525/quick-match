import { Client, Intents, MessageButton, MessageActionRow } from "discord.js";

require("dotenv").config();

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const TOKEN = process.env.TOKEN;

client.on("ready", () => {
  console.log("Ready");
  client.user?.setActivity("!match", {
    type: "PLAYING",
  });
});

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }
  if (message.content === "!match") {
    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("ready")
        .setStyle("PRIMARY")
        .setLabel("READY")
    );
    message.channel.send({
      content: "準備完了なら押してください",
      components: [row],
    });
  }
});

client.login(TOKEN);
