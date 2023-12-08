import cluster from "cluster";

if (cluster.isPrimary){
        const worker = cluster.fork()
        worker.send('Hello!')
        worker.on('message', msg => {
            console.log(`msg: ${msg} from worker#${worker.id}`)
        })
} else{
    process.on('message', (msg) => {
        process.send(msg);
    });
    process.send('Message from worker')
}