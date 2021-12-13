let file = "index.json"
let fs = require("fs")

module.exports = JSON.parse(fs.readFileSync(file))
