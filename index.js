
// What is Node.js? it is a free open source runtime environment that uses javascript as a web server. it allows javascript code to run as a web server.
// Two main ways in using Node.js
// 1. As a web Server 2. Desktop Format. Node.js is a good cross-platform format.
// Web server is commonly use in node.js. It recieves request, work on them and send response to the client.

// Why/Reasons for Using Node.js
// 1. it is designed to build scalable network application. 2.It is open-sourced, free and runs on various platform. 3. it uses the Chrome V8 javascrit engine internally for processing. Javascript engine is supported by Google which makes it reliable, Robust and Active maintainance. 4. Has large size of one billions downloads and it is used by major companies. 5. Works asynchronously in a way to handle multiple request at the same time.

//  Pros of Node.js
// 1. Scalable with cluster modules. Using the scalabiliity of node.js, you can scale lot of users if needed. 2. Great cross-platform functionality. You can code on one platform and implement the same code on other platforms. 3. Strong JSON support. JSOn is a specific way of formatting data. It is commonly used in web requests. A request is typically formatte in JSON. 4. Quick development process. it is easy to get Node.js up and run: Downloade Node.js > install it > initialize a project > create the index.js file > start writing code.

// Uses of Node.js
// 1. Node.js can generate dynamic page content. 2. It can open, write, delete and close file on the server. 3. It collects and processes data sent in request. 4. It can add, modify, and delete data in the database

// What Can You Do With Node.js. (Node.js Features)
// 1. It provide non-blocking event driven IO. 2. It allow simple, full-stack development with Javascript. it also allow simple way to develop desktop applications using Javascript. 3. easy and scalable, very simple to get started. 4. Node.js improves the response time and creates a better throughput and faster processing. Throughput is the ability to send and recieve data quickly. 5. Package and Platform Support, NPM(Node Package Manager): contains all difference packages provided by Node.js(The packages are third party codes) To set up an API server, you can install a package called express(npm install express). Express allows you to create components for API servers without the need to implement all the functionality by it self. to set up encryption on a product, you can install the bcrypt module: npm install bcrypt: allows one to access all the cryptography function without the need to implement all function by oneself

// Use Cases of Node.js
// 1. Chat App 2. API 3. Data Streaming 


// Node.js Evolution and Background
// in 2009 and it was written by Ryan Dahl, as it continue to be develop it start to gain more popularity. In 2010 a lot more packages were being developed for Node.js. These packages provide different pieces of code that can be use with Node.js. A lot of different packages became popular in 2010 like: 1. Express 2. Socket.io
// Because of different packages and features that Node.js offered, in 2011 node.js hit version 1.0 and in 2022 version 18.4.0 version was release. Ever since many companies started using Node.js because of the new features it offers. A big companies like LinkedIn, Microsoft, IBM. alot of framworks work with Node.js such as React.js, Vue.js etc.  

// NVM (Node Version Control)
// NVM is used to manage different node.js version.Nvm also allows to Install multiple versions of Node.js.after the installation of NVM, we can then install the version of node we want and use it.
// steps. 1. nvm install 18.4.0 2. nvm use 18.4.0 3. nvm exec.
// To check for all the version install, we say 1. nvm ls




// Creating My First Node.js Script


console.log("Hello World!")
console.log(1 + 1)



// Introduction to Node.js Modules
// Modules is a block of code dedicated to a specific functionality. The reason to use modules is code reusability. The code of block is generally not function on it own, it could be use by others parts of the program. Modules provide better readability, easy to read and understand. Also provide better testing standard and detect errors.

// Methods of Creating Modules
// 1. ES6: standard for javascript. 2.Common JS: used by Node.js for javascript implementation

// Type of Modules
// 1. Locally-developed Modules 2. Core Modules 3. Third-party Modules

// Importing and Exportig Modules
// using CommonJs
// const maths = require("./maths.mjs")

// console.log("commonjs:", maths.addNum(1,3))

// Using ES6 JS to Import 
import {minus} from "./maths.js"

console.log(minus(2, 5))

// Importing from Namespaces
// Namespaces is represent a set of function, object or anything imported from module
// e.g import * as Math from "./maths.mjs"

// Working with the Node Pack Manager (NPM) 
// npm i os
import os from "os"
console.log(os.version())


// Yarn
// Yarn is a alternative package manager for Node.js, used to install or remove package froam your project, it provide speed, security and consistency to a project.
// npm install --global yarn, yarn --version , yarn add express, yarn set version stable

// Pnpm : is a package manager like yarn and npm. it is designed to be fast as possible while offering the same features as npm and yarn. Corepack allow user to manage different version of yarn and pnpm

// Corepack : A component used to manage different versions of package manager.
// npm -v, corepack npm@6.18.6 --activate


// Recipe : Building a Calculator App
import * as calculator from "./calculator.js"

console.log(calculator.add(1,2))
console.log(calculator.subtract(1,2))
console.log(calculator.multiply(1,2))
console.log(calculator.division(1,2))


// Asynchronous Programming and callback function 
import fs from "fs"

fs.readFile("async.txt", function(err, data){
    if(err){
        console.error(err);
    } else{
        console.log(data.toString())
    }
})

console.log("Done!")
// When a request is send to file, it gives back a response, once the reponse is back it then run the function code.... This illustion is an example of callback function. The callback execute when the asynchronous is finished

// Promises : it enable you to break down asynchronous code into two different pieces. We have a Producer: code that takes time to execute and Consumer : processes the result from the producer.
const getFile = fileName => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if(err){
                reject(err)
            } else{
                resolve(data.toString())
            }
        })
    })
}

getFile("async.txt")
    .then(data => console.log(data))
    .catch(err => console.log(err))

// Async/Await
// Provides the ability to wait for asynchronous call to complete before continuing to process. This is general use in a login form page, where deails is filled and send to the database, the user will wait for the result before proceeding further.
async function getFile1(fileName){
    let data = fs.promises.readFile(fileName)
    return (await data).toString()
}

let getData = await getFile1("async.txt")
console.log(getData)

// Blocking and Non-blocking I/O
// Blocking implies synchronously execution. Synchronou I/O takes time to complete, blocking the execution of everything else. We use blocking i/o when we need the result immediaately.
// Non-blocking , in this case asynchrronous works better. It will wait for the result. It will always faster, if we manage it in the right way.



// Recipe : Building a Logging Program
import { appendLogLine, readLogFile, writeLogLine } from "./logger.js"

writeLogLine("log.txt", "test line\n")
readLogFile("log.txt")
appendLogLine("log.txt", "another test line\n")
readLogFile("log.txt")
 

// Path Modules : enable us to interact with and manupulate directories and paths/files on our computers 
import path from "path"

let file = path.format({dir: '\\home\\Elvis', base: 'text.txt'})

console.log("file:", path.parse(file).ext)
// for Window
console.log(path.parse("C:\\Users\\Elvis\\file.txt"))
// For Linux
console.log(path.parse("/home/Elvis/file.txt"))


// ECMAScript Replacement for _dir 
// ES _dir is a special variable that allows retrieving the path/directory of the modules that currentlly runs the code.
// Using _dirname : the main goal is to get quick access to local directory for module that is currently running. Thisis to provide a context to where the module can be located.
import * as url from "url";
const _dirname = url.fileURLToPath(new URL('.', import.meta.url))

console.log("dir---:", _dirname)


// Stream : enable you to handle data that comes in pieces. This happen when you work on a network-based application like wweb application
// let stream = fs.createReadStream("log.txt")
let stream = fs.createWriteStream('log2.txt')

// stream.on("data", function(data){
//     let chunk = data.toString()
//     console.log("Chunk:--", chunk) 
// })

stream.write("Line1\n")
stream.write("Line2\n")
stream.write("Line3\n")


// Transform Stream : It allow us to connect the read stream to the write stream. This main concept is, Reading from a location > Getting data in chunks > Writing data to another locationas it is recieved. An example of this process is uploading a file to a server.
import { Transform } from "stream"

const fileReadStream = fs.createReadStream("log.txt")
const fileWriteStream = fs.createWriteStream("log2.txt")

const trans = new Transform({
    transform(chunk, encoding, callback){
        callback(null, chunk.toString().toUpperCase())
    }
})

fileReadStream.pipe(trans).pipe(fileWriteStream)


// Readind and Parsing csv FIles
// CSV is a common file format. It is used to represent database data as it offers a convinient wayto seperate the columns in a database. If you look at the CSV data, you can see that every value is seperated by comma.
import * as csv from 'csv-parse'

fs.createReadStream('log.csv')
    .pipe(csv.parse({delimiter: ","}))
    .on("data", function(row){
        console.log(row);
    })


// Writting Formatted CSV Files
// Write CSV files : a process similar to reading CSV files but in the reverse order.
import * as stringify from "csv-stringify"

const write = fs.createWriteStream('log2.csv')
const data = [[1,2,3], [4,5,6], [7,8,9], [10,11,12]]
const columns = ["num1", "num2", "num3"]

const stringifier = stringify.stringify({header: true, columns: columns})

for(let i = 0; i < data.length; i++) {
    stringifier.write(data[i])
}

stringifier.pipe(write)



// Recipe: Parsing Bank Records ​
// As bank records often come in a comma-separated format, they are good for demonstrating with the read and write file stream.
// The transaction.csv file contains csv values, which are imaginary bank account  number and some transactions of the money taken out and added in.
// You need to calculate the sum of all transactions to figure out the total amount  at the end of the day 

let sum = 0;
fs.createReadStream('transactions.csv')
    .pipe(csv.parse({delimiter: ","}))
    .on("data", function(row){
        sum += parseFloat(row[1]);
        console.log(sum)
    })
    .on("end", function(){
        console.log(sum);
    })
    .on("error", function(err){
        console.error(err)
    })




// Basic Execution in Node.js REPL​
// REPL stand for "Read Eval Print Loop" : it is basically an interactive command line shell that takes in a user input, execute it and return result to the user.
import repl from "repl"

repl.start()

// REPL Variables and Operations​

// REPL Multiline​

// Creating Basic I/O with Readline​
// Readline is a module in Node.js that enable the user to read data from the command line and get the user input.
import readline from "readline"

let rl = readline.createInterface(process.stdin, process.stdout);

rl.question("What is your name?", (name) => {
   cr
    // console.log("Your name is:" + name)
    rl.close()
})


// Handling Command Line Signals​
// We have 3 types of Signal
// SIGINT : is the signal sent when you press Ctrl and C at the same time in the terminal
// SIGSTP : is the control set, and it doesn't do anything. It's like the REPL
// SIGCONT : is invoked when a process in the background is brought back to focus. Once the process is in focus, SIGCONT is executed. It supports the idea  of continuing the process
let rl2 = readline.createInterface(process.stdin, process.stdout);

rl2.on("SIGINT", () => {
    rl2.question('Exit (y or n)?', (input) => {
        if(input === "y"){
            rl2.pause()
        }
    })
})


// The process Module : It enable to take the process further than what the command line module do. With the processes, you handle specific situation, such as before an exist or when an exist occur 
// The Readline Module : allows you to handle different signals.
import process from "process"

process.on('beforeExit', (code) => {
    console.log(code)
})


// Parsing Arguments
// You can parse arguments using the process.argv property. It will return an array of arguments, where the first will be the location of Node.js, and the second will be the location of the currently executing file.
console.log(process.argv)


// Recipe: Creating CLI Utility
import { ArgumentParser } from "argparse"

const parser = new ArgumentParser({
    description: "A sinple command line utility"
})

parser.add_argument('-f', "--foo", {help: "Enter some value"})
parser.add_argument('-g', {help: "Enter a value of g"})
let args = parser.parse_args();

console.log(parseInt(args.g) + parseInt(args.foo))


// Event-driven Programming
// is a programming paradigm in which the flow of the program is control by external events.

// Node.js Events
import { EventEmitter } from "events"
// The EventEmitter is a special class in Node.js that is used to emit an event. The EventEmitter class enable you to send an event to the group of event handled by the event loop.
const myEventEmitter = new EventEmitter

function notifyConnection(ip) {
    console.log(ip + " connected to server")
}

myEventEmitter.on("connection", notifyConnection)

myEventEmitter.emit("connection", "127.0.0.1")


// Synchronous Events
function notifyConnection1(ip) {
    console.log(ip + " connected to server")
}

async function process1(ip) {
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log(ip + " has connected") 
}

myEventEmitter.on("connection1", notifyConnection1)
myEventEmitter.on("connection1", process1)

myEventEmitter.emit("connection1", "127.0.0.1")
myEventEmitter.emit("connection1", "192.168.0.1")


// Publisher-Subscriber Model
// What is pub-sub model? well we have two component, a Publisher and Subscriber. Publisher sends messages and Subscriber recieves messages.
import { Publisher } from "./Publisher.js"
import { Subscriber } from "./Subscriber.js"
// import { EventEmitter } from "events";
const myEmitter = new EventEmitter();

const publisher = new Publisher();
const subscriber = new Subscriber(myEmitter);

publisher.publishMessage(myEmitter)


// Project: Event-publisher Reminders
 import { Subscriber1, Publisher1 } from "./PubSub.js"

const publisher1 = new Publisher1();
const subscriber1 = new Subscriber1("event1");
const sub2 = new Subscriber1("event2");

publisher1.publishReminder("event1", "Event1 is has ended!")
publisher1.publishReminder("event2", "Event2 is starting soon!")


// The Net Module
// Its Enable networking capabilities in Node.js. Net module is used to creates clients and server for network communication using a protocol called Transmission Control Protocol (TCP)
// TCP is used to transmit data between devices, over network. TPC provides stateful networking i.e a networking that works with state. It allows you to keep track of the state of transaction. So there's a lot of protcols that use TCP. There's HTTP, FTP, SMTP, SSH.

// TCP Server (Creating TCP server)
// (Connected to the TCP client running on the port to which the server is listening) Server and Client file is created and they client send a request to connect to the server port.

// TCP Client
// Establish communication between client and server using Sockets. Sockets stream data between client and server, where data is not sent in one piece.


// Introduction to DNS
// DNS is known as Domin Name System, it is used primarily to translate domain name into IP address.
// When you type a domain name, you must translate it into IP address to send the traffic to the DNS server. DNS server are not limited to the conversion of domain name to IP addresses; they also store a fair amount of data in records, records like "A Records" "MX Records"


// Creating a Chat Application
// The application will function like:- 1. User can connect to the server. 2. User can send message. 3. The message is broadcast to all the users who are currently connected to the server. (go to server & client files)


// Introduction to HTTP and HTTPS
// HTTP stands for  "Hyper Text Transfor Protocol" and it is used to exchange data between clients and servers. It is more like media data, things like web pages, images or videos and this type of data is transmitted through hypertext transfer protocol. HTTP is a TCP protocol, it runs on port 80 as well as prt 8080.
// There are a lot of different HTTP requests with special names. Four of them are:- 1. GET: used to retrieved data. 2. POST: Used to send data 3. PUT: To update data. 4. DELETE: used to delete data from the database.
// Common status code: 1. 100-150-199 (informational). 2. 200-250-299 (Success case). 3. 300-350-399 (Redirect). 4. 400-450-499 (Client error). 5. 500-550-599 (Server error).

// HTTPS is a variation of HTTP that provides encryptption for data. HTTP encrypts the data sent between the client and server. Even if someone sits in the middle of the communication, they will not see the data.
// HTTPS is used in modern web applications. information critical security (e.g sending a username and password to a server) needs to be encrypted

// Basic HTTP Server Setup
// HTTP Headers: can be used to provide additional information to the server about what you are sending/requesting such as data formats, Retrieve/send data. Also the server can use the header to send back information to the client, Like if the request was successful or unsuccessful.

// Request Processing (back to server.js)
// Processing GET Requests 

// Basic of HTTPS (secSever.js file)
// The key allows encryption and decryption; the certicate contains information about the server to help verify the server identity. 

// Project: Creating a HTTP Server(Part 1)(httpServer.js file)



 


// Introduction to HTTP2  (Version 2)
// What is HTTP/2? Is a revised version of HTTP provides addition features for speed. Data in HTTP/2 comes in streams rather than like a big piece of data as in HTTP/1.
// The main idea of HTTP/2 is to avoid making the web application providers to rewrite their applications but to provide benefit to enhance the speed and functionality of HTTP. 
// Ways it works:- 1. HTTP/2 allows servers to push content and supply data before requests. 2. Tries to avoid Head-of-line blocking. 3. Multiple request are multiplexed over a single TCP connection. Rather everyone having their own TCP connection with the server, the request are coming from piecewise, streamed into the actual HTTP serve.
// Everything start to work in the synchronous stream-based nethod, rather than the HTTP/1, where it was more like it's own connection, and there wasn't as mush of this stream type of idea in the data collection.

// Creating an HTTP2 Server (http2server.js file)
// Creating an HTTP2 Client (http2Client.js file)

// Routing data :- Routing is determining where the data should go depending on the path requested by the user

// -----------------
// Project: Client and Server (Part 1) (To http2Server.js file)
// Project: Client and Server (Part 2) (To http2Client.js file)



// Ciphers
// General idea of cryptography is to allow encryption and decryption. Original data > Encryption Algorithm > Encrypted data.
// Two main categories of cryptography
// 1. Symmetric key encryption : means that a single key is used for encryption and decryption. 2. Asymmetric key encryption : used separate key to encrypt and decrypt. Math is involved in creating these keys.
// Hashing : is a type of encryption. It is  a one-way process to encrypt the data. Hashing is done such that we create something that cannot be decoded at all.

// Encryption and Decryption with the Crypto Module(go to cypto.js file)
// Hashing - Crypto and Web Crypto API (hashcrypto.js file)
// Web crypto API (webCrypto.js file) : can be used independently of Node.js and can be supported by every browser. It is a standard framework used throughout each processfor crypto because it can be used regardless of support level.

// Project: Hashing passwords for user registration(hashPasswordReg.js file)

// Workers and clusters : Node.js has a cluster module for child processes.
// We can split the parent process into one or more child processes. These child processes can process some amouts of data and merge them into one big process to ge the result.
// A worker is a child process of a parent. The cluster helps to manage different pieces to help them connect and communicate with each other.
// Creating a basic worker and cluster


// Interprocess communication : The general goal of interprocess communication is to allow child and parent processes to communicate with each other. (icp.js file)


// Process management with Node.js
// PM2 utility allow us to manage the processesfor Node application. PM2 can help us manage our processes 'uptimeto ensure that the processes are not crashiing to keep them up an running consistently.

// Recipe: Speeding up Fibonacci Calculation (fibonacci.js file)
import {Worker} from 'worker_threads'

const runFibonnaci = (nums) => {
    let length = nums.length
 
    let size = Int32Array.BYTES_PER_ELEMENT * length

    let sharedBuffer = new SharedArrayBuffer(size);
    let sharedArray = new Int32Array(sharedBuffer);

    for(let i = 0; i < length; i++){
        Atomics.store(sharedArray, i, nums[i]);
        let worker = new Worker('./fibonacci.js');

        worker.once('message', (message) => {
            console.log(message);
        });

    worker.postMessage({data:sharedArray, index:i});
    }
}

runFibonnaci([50,20,21,24,4])
// A multi-threaded setup, where each application instance runs through the array and create  a new instance. The new instance calculate its Fibonacci, All instances are separated threads. This provide ability to run to run multiple Fibonacci sequence at the same time.


// Project: Server Client Architecture with Clusters (Part 1) (serverArc.js & clientArc.js)
// We have a large set of processes available to haandle the data, and we can send many different requests out to those processes and get many different responses as a result. 


// Debugging and Testing, Step through code (testFile.js)

// Introduction to Jest
// Illustration of jest (file basicTest.spec.js and test.spec.js) 



