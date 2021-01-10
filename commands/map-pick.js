module.exports = {
    name: 'map-pick',
    aliases: ['cf'],
    type: 'games',
    usage: '<none>',
    admin:false,
    args: false,
    argn: 0,
    description: 'Server Info',
    execute(message, args) {

        const Discord = require('discord.js');
        const pesan = new Discord.MessageEmbed();
        var randoms = Math.floor(Math.random() * 100);
        var mapping = randoms % 5;
        if(randoms % 2 == 0)var menang = "Menang";
        else{var menang = "Kalah";}
        pesan.setTitle("Kata pak dukun");
        pesan.setThumbnail("https://media.discordapp.net/attachments/767393287422083102/793865215384485898/3b56db89a010c31ff4347230089a94bf.jpg?width=676&height=676");
        if(mapping == 0)pesan.addField("Map yang terpilih","**ascent**");
        else if(mapping == 1)pesan.addField("Map yang terpilih","**bind**");
        else if(mapping == 2)pesan.addField("Map yang terpilih","**haven**");
        else if(mapping == 3)pesan.addField("Map yang terpilih","**split**");
        else if(mapping == 4)pesan.addField("Map yang terpilih","**icebox**");
        pesan.addField("Presentase Kemenangan", randoms + "% anda " + menang);
        message.channel.send(pesan);
    },
};