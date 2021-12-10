import { Client, Intents, MessageButton, MessageActionRow } from "discord.js";

require("dotenv").config();

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const TOKEN = process.env.TOKEN;

client.on("ready", async () => {
  console.log("Ready");

  client.user?.setActivity("/match", {
    type: "PLAYING",
  });

  await client.application?.commands.set([
    {
      name: "match",
      description: "新しいセッションを開始します。",
    },
  ]);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }

  if (interaction.commandName === "match") {
    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("ready")
        .setStyle("PRIMARY")
        .setLabel("READY")
    );
    await interaction.channel?.send({
      content: "準備完了なら押してください",
      components: [row],
    });
  }
});

client.login(TOKEN);
