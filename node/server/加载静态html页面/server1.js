let http = require('http')
let url = require('url')
let util = require('util')
let fs = require('fs')

let server = http.createServer((req,res)=>{
	res.statusCode = 200;
	// res.setHeader("Content-Type","text/plain;charset=utf-8");
	var pathname=url.parse(req.url).pathname; //找url里面的参数 比如/index
	fs.readFile(pathname.substring(1),function(err,data){// 去除/index前面的/
		if (err) {
			//读文件 失败
			res.writeHead(404,{
				"Content-Type":"text/html"
			})
		}else{//读文件 成功
				res.writeHead(200,{
					"Content-Type":"text/html"
				})
			//把文件转换为字符串
				res.write(data.toString())
			}
			//写文件
			res.end();
		})
    })
server.listen('3000','127.0.0.1',()=>{
	console.log("打开浏览器http://127.0.0.1")
})