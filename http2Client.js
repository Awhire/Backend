import http2  from 'http2';

const session = http2.connect("http://localhost:8000")

session.on('error', (err) => {
    console.error(err);
})

// const req = session.request({':path': '/'})
// req.end();

// req.on('response', (headers) => {
//     console.log(headers)
// })

// // When the data come back from the server, it will be formatted in bits.
// req.setEncoding('utf8')


// ------------

// Project: Client and Server (Part 2) 
const req = session.request({':path': '/', ':method': 'POST'})
req.write(JSON.stringify({title: "Frankenstein", author: "Mary Luiser"}), 'utf8');
req.end();

req.on('response', (headers) => {
    console.log(headers)
})

req.setEncoding('utf8')

req.on('data', (data) => {
    console.log(data)
})