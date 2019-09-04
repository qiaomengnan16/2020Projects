var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
    console.log('请指定端口号')
    process.exit(1)
}

var server = http.createServer(function(request, response){
    var parsedUrl = url.parse(request.url, true)
    var path = parsedUrl.pathname
    if(path === '/'){
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.write(`
                        <link rel="stylesheet" type="text/css" href="style.css"></link>
                        <h1>Hello,欢迎来到server.js</h1>
                        `)
        response.end()
    } else if(path === '/style.css'){
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/css;charset=utf-8')
        response.write(`h1{color: red;}`)
        response.end()
    } else {
        response.statusCode = 404
        response.end()
    }

})

server.listen(port)

