const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("server ready");
  const textnya = fs.readFileSync("./hello.txt", "utf-8");

  res.writeHead(200, {
    "Content-Type": "text/html",
    "my-header": "hello-world",
  });
  res.end(textnya);

  console.log(req.url);
});

server.listen(6969, "127.0.0.1", () => {
  console.log("Server sedang mendengarkan port 6969");
});
