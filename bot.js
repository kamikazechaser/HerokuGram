/*
Author:Mohammed Sohail
Version:1.4.0 
License:GNU GPL v3 */

// All Variables And Constants Defined Here, You can add your own packages below

var express = require('express');
var packageInfo = require('./package.json');
var bodyParser = require('body-parser');
const nodeogram = require('nodeogram'),

bot = new nodeogram.Bot('TOKEN FROM BOT FATHER HERE'); //Ensure TOKEN is between the apostrphes ''

//Bot Server is Initialised Here, Powered by Express and body-parser middle-ware. 
//DO NOT CHANGE ANYTHING BELOW THIS POINT OR IT WILL CRASH THE SERVER

var app = express();
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.json({ version: packageInfo.version });
});

var server = app.listen(process.env.PORT, "0.0.0.0", function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Bot Server Started At http://%s:%s', host, port);
});

module.exports = function (bot) {
  app.post('/' + 'TOKEN FROM BOT FATHER HERE', function (req, res) { //Ensure TOKEN is between the apostrphes ''
    bot.processUpdate(req.body);
    res.sendStatus(200);
  });
};

//BOT SERVER ENDS HERE


//Bot initialises at this point. Add your bot code below here

bot.init();

bot.command('echo', 'Echoes your voice', false, (args, message) => {
    if (args[0] != '') message.reply(args.join(' '), {});
});
