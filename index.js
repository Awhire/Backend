
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
    rl.write("Your name is: " + name)
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
// You can parse arguments using the process.argv property. It will return an array ofarguments, where the first will be the location of Node.js, and the second will be the location of the currently executing file.
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
