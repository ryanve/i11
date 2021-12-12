const fs = require("fs")
const ok = require("assert").ok
const eol = require("eol")
const i11 = require("./")
const read = file => fs.readFileSync(file).toString()
const son = JSON.parse(read("i11.json"))
const txt = eol.split(read("i11.txt"))

ok(i11 instanceof Array)
ok(son instanceof Array)
ok(txt instanceof Array)
ok(i11.length)
ok(son.length)
ok(txt.length)
ok(i11.length === son.length)
ok(i11.length === txt.length)
ok(i11.indexOf("coral"))

console.log(i11.length, "colors =)")
