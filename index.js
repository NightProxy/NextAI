import express from 'express';
import http from 'node:http';
import cors from 'cors';
import { hostname } from "node:os"

const server = http.createServer();
const app = express(server);
const __dirname = process.cwd()
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(cors());


app.get('/', (req, res) => {
    res.sendFile('/pages/index.html');
});

server.on('request', (req, res) => {
    app(req, res)
})

server.on('listening', () => {
  const address = server.address();

  console.log("Listening on:");
  console.log(`\thttp://localhost:${address.port}`);
  console.log(`\thttp://${hostname()}:${address.port}`);
  console.log(
    `\thttp://${
      address.family === "IPv6" ? `[${address.address}]` : address.address
    }:${address.port}`
  );
})

server.listen({ port: PORT, })

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

function shutdown() {
  console.log("SIGTERM signal received: closing HTTP server");
  server.close();
  bareServer.close();
  process.exit(0);
}
