import { createServer } from 'node:http';
import { getNotes } from './db.js';

const PORT = 3000;
const HOST = '127.0.0.1';

const server = createServer(async(req, res) => {
    //await getNotes()
    if (req.method === 'GET' && req.url === '/notes'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const { rows } = await getNotes()
        res.end(JSON.stringify(rows))
    }
});

server.listen(PORT, HOST, () => {
  console.log(`Listening on ${HOST}:${PORT}`);
});

