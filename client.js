import net from 'net'

// const client = net.connect({port: 8080}, function() {
//     console.log('Connected to server')
// })



// Using Socket to communicate between client and server. They communicate vice-versa
// const client1 = net.connect({port: 8080}, function() {
//     console.log('Connected to server')

//     // Sending data back to the server
//     client1.write("Hello Server!")
// })

// client1.on('data', function(data){
//     console.log('recieved: ' + data.toString())
// })


// Creating a Chat Application
import readline from 'readline';

const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const userNameIn = new Promise(resolve =>{
    readLine.question("Enter a username: ", answer =>{
        resolve(answer);
    })
})

userNameIn.then((username) => {
    const client  = net.connect({port:8080}, function(){
        console.log("Connected to server")
    })

    readLine.on('line', data => {
        client.write(username + ':' + data)
    })

    client.on('data', function(data){
        console.log(data.toString())
    })
})