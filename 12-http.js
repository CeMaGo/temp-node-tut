const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (res.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(`<h1>Ooops!</h1>
  <p>We cant seem to find the page you are looking for</p>
  <a href="/">back Home</a>`);
});

server.listen(3003);
//* NOTE how Node is not exiting
//* since we have a webserver, it will continue listen for request
