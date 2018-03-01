var fs=require('fs')
// fs是node的核心模块
fs.readFile('./1.txt',function(err,data){
	// readFile是异步的函数。没有返回值，不能用var变量接受。如果接入返回值，就传入一个方法。执行读取文件之后，会调用这个函数。
	// 如果读取文件失败，错误原因就写入err。
	// 如果读取成功，那么err就是ull，data是数据。
	console.log(err);
	console.log(data.toString())
})