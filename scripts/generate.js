const fs = require("fs");

const username = "blackrexdl";

// simple placeholder generator logic
// (real version can use GitHub API later)

if (!fs.existsSync("out")) {
  fs.mkdirSync("out");
}

// fake GIF placeholder (replace later with real renderer)
const dummyGif = Buffer.from(
  "GIF89a\u0001\u0000\u0001\u0000\u00ff\u0000\u0000\u0000\u0000\u0000!\xf9\u0004\u0001\u0000\u0000\u0000\u0000,\u0000\u0000\u0000\u0000\u0001\u0000\u0001\u0000\u0000\u0002\u0002D\u0001\u0000;"
);

fs.writeFileSync("out/readme.gif", dummyGif);

console.log("GIF generated for:", username);