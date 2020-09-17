// Import express
const express = require("express")

// Creates a server
const server = express();
const port = process.env.PORT


// Run a server
server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

server.listen();