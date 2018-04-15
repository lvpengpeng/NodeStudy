let http=require('http'); //http 可以加载任意接口
let util =require('util')
http.get('http://www.imooc.com/u/card', function(res){
	let data = "" ;
	//定义返回的数据
	res.on('data',function(chunk){
		//监听data变化，只要有数据接收过来，就会执行后面的回调函数。
		data +=chunk;
		//并不能一次接收所以数据，所以 data++,每次变化都返回。
	})
	res.on ('end',function(){
		//接收完数据
		let result =JSON.parse(data);
		//转换数据成对象。
		//打印
		console.log('result:'+util.inspect(result))
	})
})