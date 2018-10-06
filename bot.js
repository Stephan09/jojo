const Discord = require('Discord.js');
const client = new Discord.Client();

const prefix = '!';


client.on('message', message => {
	
	if(message.content.toLowerCase() === prefix + 'help') { if(message.author.bot) { return; }
	 
	         var embed = new Discord.RichEmbed()
			 
			 .addField('here is my list with commands: ', '!help -gives help commands.')
			 .setColor('GREEN')
			 
			message.channel.sendEmbed(embed);
	
	}
	
});


client.on('guildMemberAdd', member => {
		const channel = member.guild.channels.find(ch => ch.name === 'chat');
        if (!channel) return;
		channel.send(`${member} Welcome to Jojo's World Discord server:grinning:`);
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
			 
			 .addField('Hello! I am JoJos Bot:smile:  ', 'At the moment I am a beta bot and will be programmed by Stephan. I dont have many commands yet, but some will come later:wink: .')
			 .setColor('GREEN')
			 
			message.channel.sendEmbed(embed);
	
	}
	
});

	
  
  
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot

client.on('ready', () => {
	console.log("Bot ist fertig xD\n\n")
	});
	
	
