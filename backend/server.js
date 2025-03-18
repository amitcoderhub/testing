const http = require("http");

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    if (req.url === "/api/test" && req.method === "GET") {
        res.writeHead(200);
        res.end(JSON.stringify({ message: "Backend is working!" }));
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: "Not Found" }));
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
