const operatingSystem = require("os");
//! build-in methodes can be destructured {operatingSystem.BuildInMethode} = require('os')
//* this gives acces to all methodes and proporties available

//info about current User
const user = operatingSystem.userInfo();
console.log(user);

//methode returns the user uptime in seconds
console.log(`The System Uptime is: ${operatingSystem.uptime()}seconds`);

const currentOS = {
  name: operatingSystem.type(),
  release: operatingSystem.release(),
  totalMem: operatingSystem.totalmem(),
  freeMem: operatingSystem.freemem(),
};

console.log(currentOS);
