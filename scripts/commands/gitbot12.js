module.exports.config = {
	name: "goiadmin1",
	version: "1.1.0",
	permission: 0,
	credits: "farhan",
	prefix: true,
	description: "Bot will rep ng tag admin or rep ng tagbot",
	category: "Other",
	usages: "",
	cooldowns: 5
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61556524212362") {
    var aid = ["61556524212362"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
	var msg = ["এটা রাকিব এর কলিজা লাগে আর ম্যনশন করবি না", " দারা তোদের একটা ব্যবস্হা নিতে হবে খালি রাকিব এর কলিজা কে ডাকে 🥲", "আবে সালা তোরা নেকামি করবি আর বস এর কলিজা মেনশন দিবি কেন, আমার বসকে মেনশন দে😌", "Assalamu Walaikum আপনি যারে ম্যনশন করতে আছেন ওইটা রাকিব এর কলিজা লাগে", " তুই আর কতো জালাবি আর তোর ভাবিকে ম্যনশন দিবি না🥵🥰😍😏","বস এর কলিজা কে আর ম্যনশন দিবি না তার এখন জানু 🤭 আছে ওকে"];
	return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
