// http静态文件服务器(1)
var http=require('http')
var fs=require('fs')
var server=http.createServer(function(req,res){
	// 请求行 url字段
	var url=req.url;
	console.log(url)
// 浏览器每次发起请求，都会同时请求一次favicon.ico (浏览器左上角图标)（本次不讨论浏览器缓存了favicon.ico）
// 我用http.createServer()打开了8080端口来监听post过来的数据，然后根据post过来的数据进行下一步任务处理。
// 但我发现，每次post数据过来，都是请求了favicon.ico导致出现了莫名的bug…，所以每次访问favicon的时候，直接手动return，阻止继续往下执行。
	if(url=="/favicon.ico"){
		res.end('404')
		return
	}
	if(url=="/"){
	res.setHeader("Content-Type","text/html;charset=utf-8")
		fs.readFile("./index.html",function(err,data){
			// end相当于write+end （即写入响应体，也可以结束响应体）， end方法不能接收对象类型的响应体，只能放字符串或者Buffer
			if(err){
				res.end(err.toString())
			}else{
				res.end(data)
			}
		})
	}else if (url=="/color.css") {
		res.setHeader("Content-Type","text/css;charset=utf-8")
		fs.readFile("./color.css",function(err,data){
			// end相当于write+end （即写入响应体，也可以结束响应体）， end方法不能接收对象类型的响应体，只能放字符串或者Buffer
			if(err){
				res.end(err.toString())
			}else{
				res.end(data)
			}
		})
	}else{
		res.end('404')
	}

})
server.listen(80)