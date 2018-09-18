var mosca = require('../../');

module.exports = {
  id: 'mymosca', // used to publish in the $SYS/<id> topicspace
  stats: false, // publish stats in the $SYS/<id> topicspace
  port:1883,
  interfaces: [
    { type: "mqtt", port: 1883 },
    { type: "http", port: 31113, bundle: true, static: './' }
  ],
  logger: {
    level: 'debug'
  },
  backend: {
    type: 'mongodb',
    url: "mongodb://localhost:27017/mosca"
  },
  persistence: {
    factory: mosca.persistence.Mongo,
    url: "mongodb://localhost:27017/mosca"
  }
};
