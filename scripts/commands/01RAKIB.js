const fs = require("fs");
module.exports.config = {
	    name: "fack15",
    version: "1.1.0",
    permission: 0,
    credits: "farhan",
    description: "noprefix",
    prefix: true,
    category: "commands",
    usages: "😜",
    cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
		if (event.body.indexOf("KING RAKIB")==0 || event.body.indexOf("Kingrakib")==0 || event.body.indexOf("King Rakib")==0 || event.body.indexOf("king rakib")==0) {
		var msg = {
				body: "~ ওৃঁইৃঁ রাৃঁকিৃঁবৃঁ আৃঁছৃঁ..!🥺🥀",
				attachment: fs.createReadStream(__dirname + `/cache/oirakib.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🍀", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }
