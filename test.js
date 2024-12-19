const { sayHello, calculationVat } = require("./utils");

sayHello();
const vat7 = calculationVat(100, 7);
console.log(vat7);
console.log(__filename);
console.log(__dirname);

// Path
const path = require("path");

console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
console.log(path.join(__dirname, "utils.js"));

// File System
const fs = require("fs");

// เขียนไฟล์
// fs.writeFileSync(path.join(__dirname, "data.txt"), "Hello Save");

// เขียนไฟล์แบบ async
// fs.writeFile(path.join(__dirname, "data.txt"), "Hello Save", () => {
//   console.log("Finish");
// });

// อ่านไฟล์
console.log(fs.readFileSync(path.join(__dirname, "data.txt"), "utf8"));

// OS
const os = require("os");

console.log(os.cpus());
console.log(os.homedir());
console.log(os.uptime());

// Events
const events = require("events");
const EventEmitter = events.EventEmitter;
const connect = new EventEmitter();

connect.on("online", () => {
  console.log("A new user has connected");
});

connect.emit("online");
connect.emit("online");
