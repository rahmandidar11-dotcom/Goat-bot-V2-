const axios = require("axios");

module.exports = {
config: {
  name: "leave",
  aliases: ["out"],
  version: "1.0",
  author: "Didar Ahmed",
  countDown: 5,
  role: 2,
  shortDescription: "Bot leave group",
  longDescription: "",
  category: "admin",
  guide: {
    en: "{pn}"
  }
},

onStart: async function ({ api, event }) {

let img = (await axios.get("https://i.imgur.com/yQJF7UR.jpg", { responseType: "stream" })).data;

api.sendMessage({
body:
"╔═════『 DIDAR BOT 』═════╗\n" +
"😞 I HAVE TO LEAVE NOW...\n\n" +
"👤 Owner : Didar Ahmed\n" +
"🫶 Thank you everyone\n" +
"👋 BYE BYE\n" +
"╚══════════════════════╝",
attachment: img
},
event.threadID,
() => api.removeUserFromGroup(api.getCurrentUserID(), event.threadID)
);

}
};
