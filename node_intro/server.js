const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.end("Welcome to Node.js!");
});

const port = 8000;
server.listen(port, () => {
  console.log("  the server is running   in   port 8000");
});
