const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("CI/CD demo app is running!");
});

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
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;