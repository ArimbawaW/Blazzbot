module.exports = {
    name: 'mods-log',
    type: 'util',
    description: 'Discord User Information',
    cooldown: 1,
    execute(message, args) {
    const Discord = require('discord.js');
    const embed = new Discord.MessageEmbed();

    Tail = require('tail').Tail;
    tail = new Tail("/var/log/nginx/error.log");
    tail.on("line", function(data) {
        if(data.includes('config=block')){

            embed.setDescription(data);
            // var i           = 0;
            // var regex       = /[\]]/g;
            // var subregex    = "$&--";
            // var hasil       = data.replace(regex, subregex)
            // var res = hasil.split("-- ");
            // embed.setTitle("Skyfall Defence System")
            //         .setColor(0xff0000)
            //         .setThumbnail('https://pbs.twimg.com/me
            //         .setFooter(res[0], "https://i.pinimg.co
            //         .setAuthor("Peacefulhack", "https://cdn
            //         .setDescription("**Identitas**" + "\n"
            //                         res[2] + "\n" +
            //                         res[3] + "\n" +
            //                         res[4] + "\n\n" +
            //                         "**Deskripsi**"+ "\n" +
            //                         res[5] + "\n\n" +
            //                         res[8]
            );
            message.channel.send(embed);
        }
        //console.log(data);
    });
    tail.on("error", function(error) {
        console.log('ERROR: ', error);
    });
