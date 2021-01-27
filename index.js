const fs = require("fs");
const http = require("http");

const server = http.createServer((request, response) => {
  console.log("server ready");

  const album = fs.readFileSync("./album.json", "utf-8");
  const user = fs.readFileSync("./user.json", "utf-8");
  const routing = request.url;
  console.log(routing);

  if (routing === "/home" || routing === "/") {
    response.end("<h1>Welcome to API Dummy</h1>");
  } else if (routing === "/user") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(user);
  } else if (routing === "/album") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(album);
  } else {
    response.writeHead(404, {
      "Content-Type": "text/html",
      "my-header": "hello-world",
    });
    response.end("<h1>Not Found</h1>");
  }
});

server.listen(6969, "127.0.0.1", () => {
  console.log("Server sedang mendengarkan port 6969");
});
