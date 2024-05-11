// const names = require('./first')
// console.log(names);
// names.sayHi('dhruv')

// Os module
// const { log } = require('console');
// const os = require('os')
// const user = os.userInfo()
// console.log(user);
// console.log(os.uptime()+" seconds");

// const currentOs = {
//     type: os.type(),
//     platform: os.platform(),
//     arch: os.arch(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem()/(1024*3)
// }   
// console.log(currentOs);

// path module
// const { log } = require('console')
// const path = require('path')
// console.log(path.sep)
// const absolute = path.resolve(__dirname,'first.js')
// console.log(absolute);

// File module
// const file = require('fs')
// const first = file.readFileSync('./content/first.txt','utf-8')
// console.log(first)
// const second = file.writeFileSync('./content/second.txt','hey welcome this is second text file',{flag:'a'}) // flag to append

// Asynchronous
// console.log('start')
// file.readFile('./content/first.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log(err)
//         return;
//     }
//     const first = result
//     file.readFile('./content/second.txt','utf-8',(err,result)=>{
//         if(err){
//             console.log(err)
//             return;
//         }
//         const second = result
//         file.writeFile('./content/third.txt',`here is the result :${first},${second}`,(err,result)=>{
//             if(err){
//                 console.log(err)
//                 return;
//             }
//             console.log('done with the task')
//         })
//     })
// })
// console.log('starting with the next task')

// http module
// const http = require('http')
// const server = http.createServer((req,res)=>{
//     if(req.url === '/'){
//         res.end("YAY !! you have landed to the home page")
//     }
//     else if (req.url === '/about'){
//         res.end("YAY !! you have landed to the about page")
//     }
//     else{
//         res.end("<h1>OOPs</h1><p>we don't have the page you're looking for heheheheh!!!</p>")
//     }
// })
// server.listen(5000)


// 