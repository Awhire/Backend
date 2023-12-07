import http2 from 'http2'

// // Routing data
// const helloHandler = (stream, headers) => {
//     console.log({headers})
//     stream.respond({
//         ':status': 200
//     });
//     stream.end('Hello!')
// } 

// const notFoundHandler = (stream, headers) => {
//     stream.respond({
//         ':status': 404
//     });
//     stream.end('Path not found!')
// }

// const server = http2.createServer()

// // server.on('error', (err) => {
// //     console.error(err)
// // })

// // server.on('stream', (stream, headers) => {
// //     stream.respond({
// //         ':status': 200
// //     });
// //     stream.write('Hello!');
// //     stream.end()
// // })

// const router = (stream, headers) => {
//     const path = headers[':path'];
//     const method = headers[':method']

//     let handler;

//     if(path === '/' && method === 'GET') {
//         handler = helloHandler
//     } else {
//         handler = notFoundHandler
//     }

//     handler(stream, headers)
// }


// server.on('stream', router);
// server.listen(8000);



// --------------- 
// Project: Client and Server (Part 1) 
const server = http2.createServer()
let books = []

const getBook = (stream, headers) => {
    let body = "";

    stream.on('data', (chunk) => {
        body += chunk;
    })

    stream.on('end', function(){
        body = JSON.parse(body);
        console.log(body.title);
    })

    books[body.title] = body.author;

    stream.respond({
        ':status': 200
    })

    stream.end(books[body.title])
}


const postBook = (stream, headers) => {
    let body = "";

    stream.on('data', (data) => {
        body += data;
    })

    stream.on('end', function(){
        body = JSON.parse(body)
        books[body.title] = body.author;

        stream.respond({
            ':status': 200
        })

        stream.end('Added book!');
        console.log(body)
        console.log(books)
    })
}

const notFoundHandler = (stream, headers) => {
    stream.respond({
        ':status': 404
    });

    stream.end('Path not found')
}

const router = (stream, headers) => {
    const path = headers[':path']
    const method = headers[':method']
    let handler;

    if(path === '/' && method === 'POST'){
        handler = postBook
    } else if(path === '/' && method === 'GET'){
        handler = getBook
    }
    else{
        handler = notFoundHandler
    }

    handler(stream, headers);
}

server.on('stream', router)
server.listen(8000);