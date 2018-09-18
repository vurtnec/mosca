'use strict'

var mosca = require('../../');
var config = require('./config');

var server = new mosca.Server(config);

server.on('error', function(err){
  console.log(err);
});

server.on('ready', function(){
  console.log('Mosca server is up and running');
});

server.on('published', function(packet, client) {  
  var topic = packet.topic; 
  console.log(packet);  
  switch(topic){  
    case 'pubMsg':  
      console.log('message-publish', packet.payload.toString());  
      //MQTT转发主题消息  
      MqttServer.publish({topic: 'other', payload: '12345678'});  
      break;  
    case 'other':  
      console.log('message-123', packet.payload.toString());  
      break;  
  }  
});  
