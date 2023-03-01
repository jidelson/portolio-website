const express = require("express");
const port = 5000; 
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send(`
  <h2>Welcome to your server!!!</h2>
  `)
});

server.listen(process.ENV.PORT || port, () => {
  console.log(`Server running on port ${port}`);
});