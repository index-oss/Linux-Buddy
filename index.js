const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server running 🚀");
});

app.post("/download", (req, res) => {
  const { filename } = req.body;
  const filePath = path.join(__dirname, "files", filename);
  res.download(filePath);
});

app.get("/events", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  setInterval(() => {
    res.write(`data: ${new Date().toISOString()}\n\n`);
  }, 2000);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Listening on", PORT));
