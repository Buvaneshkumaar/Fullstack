const http = require("http");

const hostname = "0.0.0.0";
const port = 3000;
var count=0;

const server = http.createServer((req, res) => {
  req.on("data", function(chunk) {
    var str = ""+chunk;
    count=str.split('+').length;
    console.log(str);
    console.log(count);
  });

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://localhost:${port}/`);
});