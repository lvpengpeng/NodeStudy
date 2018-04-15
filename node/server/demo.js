let http = require('http')
let url = require('url')
let util = require('util')

let server = http.createServer((req,res)=>{
	res.statusCode = 200;
	res.setHeader("Content-Type","text/plain;charset=utf-8");
	util.inspect()
	res.end("123")
})
server.listen('3000','127.0.0.1',()=>{
	console.log("打开浏览器http://127.0.0.1")
})