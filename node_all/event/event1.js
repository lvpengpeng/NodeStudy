var EventEmitter=require('events');


var util=require('util');
// Bell是普通的构造函数，util可以使继承
function Bell(name){
    this.name=name;
}

util.inherits(Bell,EventEmitter)
// 让Bell根据原型链继承EventEmitter



var jingleBell=new Bell('jingle');

jingleBell.on('ring',function(){
    console.log('收到礼物1')
})
jingleBell.addListener('ring',function(){
  console.log('收到礼物2')
})

jingleBell.once('drop',function(){
  console.log('铃铛丢了')
})

jingleBell.emit('ring')

jingleBell.emit('drop')
jingleBell.emit('drop')


