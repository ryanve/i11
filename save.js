const moment = require("moment")
const eol = require("eol")
const map = require("map-file")
const ssv = require("ssv")

const col = txt => ssv.split(ssv.yolo(
  eol.split(txt)
    .map(v => ssv.at(v, 0))
    .filter(ssv.count)
    .map(v => v.toLowerCase())
    .join(" ")
  )).sort()

const son = array => JSON.stringify(array, null, 2)

const umd = array => `!function(globe, names) {
  "freeze" in Object && Object.freeze(names)
  typeof module != "undefined" && module.exports
  ? module.exports = names
  : (globe || window)["i11"] = names
}(this, ${son(array)})`

const li = c => `<li>${c}`

const head = `<!DOCTYPE html>
<html lang="en-US">
<meta charset="utf-8">
<title>i11 CSS named colors list</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="silver">
<meta name="color-scheme" content="dark light">
<meta name="description" content="CSS named colors list aka X11 color names. Web colors dataset.">
<link rel="stylesheet" href="web.css">
<link rel="help" href="https://github.com/ryanve/i11">
`

const body = array => `
<header>
  <h1>CSS named colors</h1>
  Updated on <time datetime="${moment().format("YYYY-MM-DD")}">${moment().format("LL")}</time><br>
  Sourced from <a href="https://www.w3.org/TR/css-color-4/#named-colors">css-color-4</a><br>
  Total ${array.length} names<br>
  Data array in
  <a href="i11.txt">txt</a>
  <a href="i11.json">json</a>
  <a href="i11.js">js</a> <br>
  On
  <a href="https://github.com/ryanve/i11">github</a>
  <a href="https://www.npmjs.com/package/i11">npm</a>
</header>

<ol>
${array.map(li).join("\n")}
</ol>
`

const dom = array => head + body(array)

map({
  from: "i11.txt",
  to: "i11.txt",
  map: txt => col(txt).join("\n")
})

map({
  from: "i11.txt",
  to: "i11.json",
  map: txt => son(col(txt))
})

map({
  from: "i11.txt",
  to: "i11.js",
  map: txt => umd(col(txt))
})

map({
  from: "i11.txt",
  to: "index.html",
  map: txt => dom(col(txt))
})
