const http = require("http");
const host = '0.0.0.0';
const port = 8000;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/credentials/issue":
            res.writeHead(200);
            res.end(`{}`);
            break
        case "/credentials/verify":
            res.writeHead(200);
            res.end(`{}`);
            break
        case "/presentations/verify":
            res.writeHead(200);
            res.end(`{}`);
            break
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});