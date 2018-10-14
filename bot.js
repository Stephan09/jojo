const Discord = require('Discord.js');
const client = new Discord.Client();

const prefix = '-';


client.on('message', message => {
	
	if(message.content.toLowerCase() === prefix + 'help') { if(message.author.bot) { return; }
	 
	         var embed = new Discord.RichEmbed()
			 
			 .addField('du brauchst hilfe?: ', '-hilfe und meine kommandos kommen ;) ')
			 .setColor('GREEN')
			 
			message.channel.sendEmbed(embed);
	
	}
	
});


client.on('guildMemberAdd', member => {
		const channel = member.guild.channels.find(ch => ch.name === 'chat');
        if (!channel) return;
		channel.send(`${member} Hallo, Herzlich willkommen:`);
});


client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});


client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'Creativerse',
            type: "PLAYING",
        }
    });
});    



client.on('message', message => {
	
	if(message.content.toLowerCase() === '<@497685236763590656>') { if(message.author.bot) { return; }
	 
	         var embed = new Discord.RichEmbed()
			 
			 .addField('test', 'only test')
			 .setColor('GREEN')
			 
			message.channel.sendEmbed(embed);
	
	}
	
});

	
  
  
// THIS  MUST  BE  THIS  WAY







client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
