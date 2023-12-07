import net from 'net'

// const server = net.createServer(function(connection){
//     console.log("Connection made!")
// })

// server.listen(8080, function(){
//     console.log("Server is listening")
// })



// Using Socket to communicate between client and server. They communicate vice-versa
// const server1 = net.createServer(function(socket){
//     socket.write("Hello!")

//     // Server recieve data from client
//     socket.on("data", function(data){
//         console.log('Recieved: ' + data.toString())
//     })

//     socket.on('error', function(err){
//         console.error(err)
//     })

//     socket.on('close', function(){
//         console.log('Connection closed!')
//     })
// })

// server1.listen(8080, function(){
//     console.log("Server is listening")
// })


// Creating a Chat Application
// let sockets = [];

// function broadcast(data) {
//     sockets.forEach(socket => {
//         socket.write(data)
//     })
// }

// const server2 = net.createServer(function(socket){
//     sockets.push(socket)

//     socket.on('data', function(data){
//         broadcast(data)
//     })

//     socket.on('error', function(err){
//         console.log(err)
//     })
// })

// server2.listen(8080, function(){
//     console.log("Server is listening")
// })


// Basic HTTP Server Setup (Create)
import http from 'http'
import url from 'url'

// http.createServer(function(req,res){
//     const q = url.parse(req.url, true)
//     console.log(q.query.params)

//     res.writeHead(200, {"Content-Type": "text/html"})
//     res.write('Hello!')
//     res.end()
// }).listen(80)


// Processing GET Request
http.createServer(function(req,res){
    if (req.method === 'GET'){
        res.write("GET request recieved")
    } else if (req.method === 'POST'){
        let body = "";

        req.on("data", data => {
            body += data;
        })

        req.on("end", () => {
            body = JSON.parse(body);
            console.log(body)
        })
    }

    res.end();
}).listen(80)