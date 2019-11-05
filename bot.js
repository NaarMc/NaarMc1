const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "$";



client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});
client.on('message', luxy => {
if(luxy.content === 'هلا') {
luxy.reply(':hearts: هلا حبيبي');
}
});
client.on('message', luxy => {
if(luxy.content === 'IP') {
luxy.reply('Play.NaarMc.fmcs.cf');
}
});
client.on('message', luxy => {
if(luxy.content === 'سلام عليكم') {
luxy.reply('وعليكم السلام ورحمة الله وبركاته');
}
});
 container_name: discordgiveawaybot
    image: shukriadams/discord-giveawaybot:latest
    restart: unless-stopped
    command: npm start
    volumes:
    - ./discord-giveawaybot/:/usr/giveawaybot/discord-giveawaybot/:rw);
}
});



client.login(process.env.BOT_TOKEN);
