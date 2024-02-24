const fs = require("fs");
module.exports.config = {
	    name: "am",
    version: "1.1.0",
    permission: 0,
    credits: "rakib",
    description: "noprefix",
    prefix: true,
    category: "commands",
    usages: "Rakib",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🤯")==0 || event.body.indexOf("😱")==0 || event.body.indexOf("🙃")==0 || event.body.indexOf("😇")==0) {
		var msg = {
				body: " ~ কি হয়েছে গো মাথা ঘুরাই নাকি তোমার🥰🥀",
				attachment: fs.createReadStream(__dirname + `cache/valobashaoviram.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😽", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
