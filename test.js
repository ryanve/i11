let fs = require("fs")
let ok = require("assert").ok
let eol = require("eol")
let i11 = require("./")
let read = file => fs.readFileSync(file).toString()
let son = JSON.parse(read("index.json"))
let txt = eol.split(read("index.txt"))

ok(i11 instanceof Array)
ok(son instanceof Array)
ok(txt instanceof Array)
ok(i11.length)
ok(son.length)
ok(txt.length)
ok(i11.length === son.length)
ok(i11.length <= txt.length)
ok(i11.indexOf("coral"))

console.log(i11.length, "colors =)")
