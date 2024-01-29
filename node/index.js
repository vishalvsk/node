const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "content-type": "text/plain",
  });

  const url = req.url;

  const routeHandlers = {
    "/": () => res.end("Welcome to the Home Page!\n"),
    "/home": () => res.end("Welcome to the vishal Home Page!\n"),
    "/contact": () => res.end("Contact us at vishalkaralevsk@gmail.com\n"),
    "/address": () => res.end("Our address is ramling road shirur"),
    default: () => res.end("404 Not Found\n"),
  };

  (routeHandlers[url] || routeHandlers["default"])();
});

server.listen(5001, () => {
  console.log("Server running at http://localhost:5000/");
});
