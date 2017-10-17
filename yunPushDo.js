var BYS = require('./BYS');
var querystring = require('querystring');
var http = require('http')
var url = require('url')
var os = require('os')

var bys = new BYS('[appidkey]','[secretkey]');


bys.pushMsgToSingleDevice("[channelid]","ssss");
