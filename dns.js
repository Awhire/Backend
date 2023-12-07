import dns from 'dns'

// console.log(dns.getServers('www.google.com'))

dns.resolve('google.com', function(err, address){
    console.log(address)
})