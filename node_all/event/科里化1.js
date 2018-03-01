// function say(name,word) {
//   console.log(name,':',word)
// }

// say("zhangsan","nihao")
// say("zhangsan","你好")
// say("zhangsan","你hao")
// say("zhangsan","niHao")
//如果张三使用100种语言说你好。那么不可能写100种这个函数调用，可以省略张三。


// 方法2
// function say(name,word) {
//   console.log(name,':',word)
// }

// var newSay=say.bind(this,'张三')
// 把参数预制进去了，函数就不用传了
// newSay("nihao1")
// newSay("你好1")
// newSay("你hao1")


// 方法3
function say(name,word) {
  console.log(name,':',word)
}
function newSay(){
  say.apply(null,["张三"].concat(Array.prototype.slice.call(arguments))
    // apply比call好，因为不知道后面有多少个参数
  )
}
newSay("nihao12")
newSay("你好12")
newSay("你hao12")




