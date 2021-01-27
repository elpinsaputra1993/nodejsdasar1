const fs = require("fs");
const http = require("http");
const url = require("url");

const server = http.createServer((request, response) => {
  console.log("server ready");

  const album = fs.readFileSync("./album.json", "utf-8");
  const user = fs.readFileSync("./user.json", "utf-8");

  const { query, pathname } = url.parse(request.url, true);
  //   const routing = request.url;
  //   console.log(routing);

  if (pathname === "/home" || pathname === "/") {
    response.end(`<h1>Welcome ${query} to API Dummy</h1>`);
  } else if (pathname === "/user") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(user);
  } else if (pathname === "/album") {
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

// http://127.0.0.1:6969/home?nama=elpin
