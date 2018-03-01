var http=require('http');
var serve=function(req,res){
	// 编辑器是utf-8编码， 浏览器是GBK编码
	// res.setHeader("Content-Type","text/html;charset=utf-8")设置页面内容是html 编码格式是utf-8
	res.setHeader("Content-Type","text/html;charset=utf-8")
	res.write("当前时间：");
	res.write(new Date().toLocaleString());
	res.write("");
	res.end();
	// 调用end方法，则意味着响应结束
}
// rep就是request 请求对象，代表客户端的请求，请求行，请求头请求体
// res=response 响应对象，代表客户端的响应，响应行，响应头，响应头
// serve是监听函数 返回函数
var server=http.createServer(serve);
server.listen(80,'127.0.0.1');
// res.setHeader设置响应头
// res.write写响应体
// res.end响应结束