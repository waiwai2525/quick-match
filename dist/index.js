"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
require("dotenv").config();
const client = new discord_js_1.Client({
    intents: [discord_js_1.Intents.FLAGS.GUILDS, discord_js_1.Intents.FLAGS.GUILD_MESSAGES],
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
        const row = new discord_js_1.MessageActionRow().addComponents(new discord_js_1.MessageButton()
            .setCustomId("ready")
            .setStyle("PRIMARY")
            .setLabel("READY"));
        await interaction.channel?.send({
            content: "準備完了なら押してください",
            components: [row],
        });
    }
});
client.login(TOKEN);
