const fs = require("fs");
const text = fs.readFileSync("../file.txt","utf-8");

text = text.replace("read", "Information");
console.log("The content of the file is:")
console.log(text);

console.log("creating a new file")
fs.writeFileSync("information.txt",text)

