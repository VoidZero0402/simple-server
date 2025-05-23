const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Hello From Vercel!" });
});

app.get("/products", (req, res) => {
    res.json({
        data: [
            { id: 1, name: "product-1" },
            { id: 2, name: "product-2" },
        ],
    });
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
