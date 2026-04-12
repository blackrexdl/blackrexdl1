const fs = require("fs");

if (!fs.existsSync("out")) {
  fs.mkdirSync("out");
}

// simple valid placeholder GIF (1x1 pixel)
const gif = Buffer.from(
  "R0lGODlhAQABAIAAAAUEBA==",
  "base64"
);

fs.writeFileSync("out/readme.gif", gif);

console.log("Valid GIF generated");