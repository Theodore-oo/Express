const express = require("express");
const app = express();

app.get("/api/people", function(req, res) {
    const data = [
        { name: "Bobo", age : 22 },
        { name: "Nini", age : 25},
    ]
    return res.status(2000).json(data);
});

app.listen(8000, function() {
    console.log (" Server running at port 8000 .........")
});