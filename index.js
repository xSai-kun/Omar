const discord = require ('discord.js');

var client = new discord.Client();

const token = process.env.TOKEN;

client.on ("ready", () => {
    console.log("Je suis prêt !")
    client.user.setGame("construire notre royaume de sable.")
});

const prefix = "/";
client.on ("message", (message) => {

   if (message.author.bot) return;

   if (message.content.startsWith (prefix + "aide")) {
       message.reply ('var help_embed = new Discord.RichEmbed()
        .setColor("#0099FF")
        .setTitle("Voici mes commandes d'aide")
        .setDescription("Je suis Omar.")
        .addField("/Aide", "Affiche mes commandes")
        .addField(":certes:", "J'envoie une reaction pic.")
        .addField(":pk:", "J'envoie une reaction pic.")
        .addField(":meh:", "J'envoie une reaction pic.")
        .addField(":nanithefuck:", "J'envoie une reaction pic.")
        .addField(":bonnesintentions:", "Je vous réponds !")
        .setFooter ("Menu d'aide -  Omar.")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur a affiché les commandes du bot")
    )}
