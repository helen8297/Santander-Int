const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/:n", function (req, res) {
  const number = req.params.n;
  if (number % 2 === 0) {
    res.send({ NumberType: "even" });
  } else res.send({ NumberType: "odd" });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
