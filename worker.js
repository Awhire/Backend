import cluster from "cluster";
import http from 'http'

const numCpus = 4;

// In multi-threading, when the program is first run, the parent goes through the code. When it encounter a fork, it creates a new child process. then it start at the top of the program and start executing from there.
// So what we need to do when we have any sort of multi-thread program is to: 1. Check if it is a primary or non-primary cluster.

if (cluster.isPrimary){
    for(let i = 0; i < numCpus; i++){
        cluster.fork()
    }
} else{
    http.createServer(function(req, res){
        res.writeHead(200);
        res.end('Process ' + process.pid + " says hello!")
    }).listen(8000)
}