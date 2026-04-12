const fs = require("fs");

if (!fs.existsSync("out")) {
  fs.mkdirSync("out");
}

const gif = Buffer.from(
  "GIF89a\u0001\u0000\u0001\u0000\u00ff\u0000\u0000\u0000\u0000\u0000!\xf9\u0004\u0001\u0000\u0000\u0000\u0000,\u0000\u0000\u0000\u0000\u0001\u0000\u0001\u0000\u0000\u0002\u0002D\u0001\u0000;"
);

fs.writeFileSync("out/readme.gif", gif);

console.log("GIF generated");