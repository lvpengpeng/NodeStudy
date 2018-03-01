// var EventEmitter=require('events');
// var eve=new EventEmitter()

// var fs=require('fs');
// var person={}
// eve.on('name',out)
// eve.on('age',out)
// fs.readFile('name.txt','utf-8',function (err,data) {
//     person.name=data;
//     eve.emit('name')
// })
// fs.readFile('age.txt','utf-8',function (err,data) {
//   person.age=data;
//   eve.emit('age')
// })

// function out() {
//   if(person.age&&person.name){
//     console.log(person.name,person.age)
//   }
// }

// 或者

var EventEmitter=require('events');
var eve=new EventEmitter()
var fs=require('fs');
var person={}
eve.on('data',out)
fs.readFile('name.txt','utf-8',function (err,data) {
    person.name=data;
    eve.emit('data')
})
fs.readFile('age.txt','utf-8',function (err,data) {
  person.age=data;
  eve.emit('data')
})

function out() {
  if(person.age&&person.name){
    console.log(person.name,person.age)
  }
}