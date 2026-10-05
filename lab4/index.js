import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  const menu = `<a href="/">Main page</a>
  <a href = '/second'>Second page</a>`
  
  if (req.url === "/" && req.method === "GET") {
    res.end(menu + '<div class="ess">Main page</div>');
  }
  if (req.url ==="/second" && req.method === "GET"){
    res.end(menu + '<div class="ess">Second page</div>');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});