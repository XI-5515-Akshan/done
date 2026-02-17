import express from "express";
const app = express();

function toNum(v) {
  return Number(v);
}

app.get("/api/add", (req, res) => {
  const { x, y } = req.query;
  res.json({ result: toNum(x) + toNum(y) });
});

app.get("/api/subtract", (req, res) => {
  const { x, y } = req.query;
  res.json({ result: toNum(x) - toNum(y) });
});

app.get("/api/multiply", (req, res) => {
  const { x, y } = req.query;
  res.json({ result: toNum(x) * toNum(y) });
});

app.get("/api/divide", (req, res) => {
  const { x, y } = req.query;
  res.json({ result: toNum(x) / toNum(y) });
});

app.listen(5000, () => console.log("Backend running on port 5000"));