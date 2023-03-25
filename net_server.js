var net = require('net'); 
var server = net.createServer(); 
const host = "0.0.0.0";
const port = 3000;

server.listen(port, host, () => { 
    console.log(`TCP server listening on ${host}:${port}`); 
}); 

server.on('connection',  (socket) => { 
    var clientAddress = `${socket.remoteAddress}:${socket.remotePort}`; 
    console.log(`new client connected: ${clientAddress}`); 
    socket.on('data', (data) => { 
        var response = data.toString().trim();
        console.log(response);
        var str = response.split('text=');
        var count = ""+str[1];
        console.log(count);
        console.log(count.split('+').length);
     }); 
     socket.on('close',  () => { 
        console.log(`connection closed: ${clientAddress}`); 
     }); 
      socket.on('error', (err) => { 
        console.log(`Error occurred in ${clientAddress}: ${err.message}`); 
      }); 
});

