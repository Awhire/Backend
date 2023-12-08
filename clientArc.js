import http from 'http'

var options = {
    host: 'localhost',
    path: '/'
}

function runReq(response){
    let str = '';

    response.on('data', function(data){
        str += data
    })

    response.on('end', function(){
        console.log(str)
    })
}

for(let i = 0; i < 10; i++){
    http.request(options, runReq).end()
}