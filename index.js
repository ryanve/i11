let file = "i11.json"
let fs = require("fs")
module.exports = JSON.parse(fs.readFileSync(file))
