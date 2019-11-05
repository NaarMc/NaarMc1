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
client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'chat');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('🎽 | name :  ',`${member}`)
        .addField('📢 | نورت السيرفر يا قلبي' , `Welcome to the server, ${member}`)
        .addField('🆔 | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });//LUXY
   
    client.on('guildMemberRemove', member => { //LUXY
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`الله معاك ✋:skin-tone-1: 😔`)
        .setDescription(`مع السلامه تشرفنا بك ✋:skin-tone-1: 😔 `)
        .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
   
    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});//LUXY
    })



client.login(process.env.BOT_TOKEN);
