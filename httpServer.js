import http from 'http'
import url from 'url'

let users = []

http.createServer(function(req, res){
    if (req.method === 'POST'){
        let body = "";

        req.on('data', data => {
            body += data;
        });

        req.on('end', () => {
            body = JSON.parse(body);

            const index = users.indexOf(users.username);
            if(index == -1){ 
                users[body.username] = body.password;
            }
            console.log(users);
        });
    } else if(req.method === 'PUT'){
        let body = "";

        req.on('data', data => {
            body += data;
        });

        req.on('end', () => {
            body = JSON.parse(body);
            users[body.username] = body.password;
            console.log(users);
        });
    } else if(req.method === 'DELETE'){
        let body = "";

        req.on('data', data => {
            body += data;
        });

        req.on('end', () => {
            body = JSON.parse(body);
            const index = users.indexOf(users.username);
            if(index > -1){
                users.splice(index, 1)
            }
            console.log(users);
        });
    }
     else if(req.method === 'GET'){
        const parse = url.parse(req.url)
        console.log(users[parse.query])
    }

    res.end();
}).listen(80);