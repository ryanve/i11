let moment = require("moment")
let eol = require("eol")
let map = require("map-file")
let ssv = require("ssv")

let li = txt => `<li>${txt}`
let son = ray => JSON.stringify(ray, null, 2)
let col = txt => ssv.split(ssv.yolo(
  eol.split(txt)
    .map(v => ssv.at(v, 0))
    .filter(ssv.count)
    .map(v => v.toLowerCase())
    .join(" ")
  )).sort()

let head = `<!DOCTYPE html>
<html lang="en-US">
<meta charset="utf-8">
<title>i11 CSS named colors list</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="gainsboro">
<meta name="color-scheme" content="light">
<meta name="description" content="CSS named colors list aka X11 color names. Web color names dataset.">
<link rel="stylesheet" href="index.css">
<link rel="help" href="https://github.com/ryanve/i11">
`

let body = array => `
<header>
  <h1>CSS named colors</h1>
  Updated on <time datetime="${moment().format("YYYY-MM-DD")}">${moment().format("LL")}</time><br>
  Sourced from <a href="https://www.w3.org/TR/css-color-4/#named-colors">CSS Color Module Level 4</a><br>
  Total ${array.length} names<br>
  Data array in
  <a href="index.txt">text</a>
  <a href="index.json">json</a>
  <a href="index.js">node</a><br>
  On
  <a href="https://github.com/ryanve/i11">github</a>
  <a href="https://www.npmjs.com/package/i11">npm</a>
</header>

<ol>
${array.map(li).join("\n")}
</ol>
`

let dom = array => head + body(array)

map({
  from: "index.txt",
  to: "index.json",
  map: txt => son(col(txt))
})

map({
  from: "index.txt",
  to: "index.html",
  map: txt => dom(col(txt))
})
