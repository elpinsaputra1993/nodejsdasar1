// const fs = require("fs");
// const http = require("http");

// const textnya = fs.readFileSync("./hello.txt", "utf-8");

// console.log(textnya);

// const tulisan = " ini tulisan yang ditambahkan";
// fs.writeFileSync("./testoutput.txt", tulisan);

// const server = http.createServer((req, res) => {
//   console.log("server ready");
//   const textnya = fs.readFileSync("./hello.txt", "utf-8");
//   res.end(textnya);

//   // console.log(req.url);
// });

// server.listen(6969, "127.0.0.1", () => {
//   console.log("Server sedang mendengarkan port 6969");
// });

// Response dari apps kita
// const fs = require("fs");
// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("server ready");
//   const textnya = fs.readFileSync("./hello.txt", "utf-8");
//   res.end(textnya);

//   console.log(req.url);
// });

// server.listen(6969, "127.0.0.1", () => {
//   console.log("Server sedang mendengarkan port 6969");
// });

// lat 333 =============

// const fs = require("fs");
// const http = require("http");

// const server = http.createServer((request, response) => {
//   console.log("server ready");

// //   const album =fs.readFileSync('./album.json','utf-8');
//   const user = fs.readFileSync('./user.json','utf-8');

//   const routing = request.url;

//   if(routing === "/home" || routing==="/"){
//       fs.readFileSync('./album.json','utf-8',(err,data)=>{
//           const jsonAlbum = JSON.parse(data);
//           response.writeHead(200,{'Content-Type':'application/json'})
//           response.end(jsonAlbum)
//       })
//       response.end("<h2>Welcome</h2>")
//   }else if(routing ==="/album"){
//       response.writeHead(200,{'Content-Type':'application-json'})
//       response.end(user);
//   }else{
//       response.writeHead(200,{'Content-Type':'application-json','my-header':'hello-world'})
//       response.end("<h1>Not Found</h1>");

//   }
// }

// server.listen(6969, "127.0.0.1", () => {
//   console.log("Server sedang mendengarkan port 6969");
// });
