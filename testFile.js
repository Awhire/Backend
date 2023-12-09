import http from 'http'

const server = http.createServer(function (req, res){
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello World!")
})

server.listen(80)

// To start the process of a step through, you must right click on a line of code and select Add breakpoint. A breakpoint causes code to Stop execution. You can Hover the variable to view a value of a variable at a break point.