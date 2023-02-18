const http = require('http')
const fs = require('fs') 
const url = require('url')



http.createServer(function(req, res){

    var q = url.parse(req.url, true)

    if(q.pathname==='/'){
        fs.readFile('./views/index.html', (err, data)=>{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })  
    }else if(q.pathname==='/signup'){
        fs.readFile('./views/signup.html', (err, data)=>{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }else if(q.pathname==='/profile'){
        console.log(q.query);
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('Welcome User')
        res.end()
        
    }else if(q.pathname==='/gallary'){
        fs.readFile('./views/gallary.html', (err, data)=>{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }else{
        res.writeHead(404,{'Content-Type':'text/html'})
        res.write('error')
        res.end()
    }
    
}).listen(3000, ()=>{
    console.log('server started!');
})