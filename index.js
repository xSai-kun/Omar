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
        message.reply("Bonjour !");
    console.log('Le bot dit bonjour');
  }
    
    if (message.content === "/pk"){
        message.reply("arrive dans un magnifique spectacle son et lumières qui se finit sur un énorme feu d'artifice !!");
    console.log('Le bot dit bonjour');
  }
      
  if (message.content === "/meh"){
        message.reply("**lance un chat sur Gilbert** :cat: :cat: :cat:");
    console.log('Le bot lance un chat');
  }

  if (message.content === "/nanithefuck"){
        message.reply("Oups, Andrew a encore oublié un dossier important :facepalm:");
    console.log('Le bot perd un dossier');
  }
  
  if (message.content === "/bonnesintentions"){
        message.reply("Athanase te demande ce que tu fous. Il n'a pas l'air d'apprécier ton câlin...");
    console.log('Le bot fait un câlin.');
  }
    
});
