const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "/";
var randnum = 0;

client.login(process.env.TOKEN);

client.on("ready", () => {
    console.log("Je suis prêt !")
    client.user.setGame("construire notre royaume de sable.")
});

client.on('message', message => {

    if(message.content === prefix + "Aide"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#0099FF")
        .setTitle("Voici mes commandes d'aide")
        .setDescription("Je suis Omar !")
        .addField("/Aide", "Affiche mes commandes")
        .addField("/certes", "J'envoie une reaction pic.")
        .addField("/pk", "J'envoie une reaction pic.")
        .addField("/meh", "J'envoie une reaction pic.")
        .addField("/nanithefuck", "J'envoie une reaction pic.")
        .addField("/bonnesintentions", "Je vous réponds !")
        .setFooter ("Menu d'aide -  Omar")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur a affiché les commandes du bot")
    }

    if (message.content === "/certes"){
        message.reply({file: ["./images/Sai certes.png"]});
    console.log('Le bot accorde un fait.');
  }
    
    if (message.content === "/pk"){
        message.reply({file: ["./images/Sai Péka moa.png"]});
    console.log('Le bot se questionne.');
  }
      
  if (message.content === "/meh"){
        message.reply({file: ["./images/Sai - Meh.png"]});
    console.log('Le bot est dubitatif.');
  }

  if (message.content === "/nanithefuck"){
        message.reply({file: ["./images/Nani the fuck.png"]});
    console.log('Le bot ne comprend pas.');
  }
  
  if (message.content === "/bonnesintentions"){
        message.reply({file: ["./images/Bonnes intentions.jpg"]});
    console.log('Le bot fait des supositions.');
  }
    
});
