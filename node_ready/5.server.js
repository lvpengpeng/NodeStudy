// http静态文件服务器(1)
var http=require('http')
var fs=require('fs')
var server=http.createServer(function(req,res){
	res.setHeader("Content-Type","text/html;charset=utf-8")
	fs.readFile("./index.html",function(err,data){
		// end相当于write+end （即写入响应体，也可以结束响应体）， end方法不能接收对象类型的响应体，只能放字符串或者Buffer
		if(err){
			res.end(err.toString())
		}else{
			res.end(data)
		}
	})
})
server.listen(80)