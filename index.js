const express = require("express");

const app = express();

app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

app.get("/users", (req, res) => {
    res.json([
        { id: 1, name: "Ahmad" },
        { id: 2, name: "Sara" }
    ]);
});

if (require.main === module) {
    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
}

module.exports = app;