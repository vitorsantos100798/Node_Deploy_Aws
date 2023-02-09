import * as express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Ok");
});
app.get("/teste", (req, res) => {
  return res.send().json({
    message: "Hellou Word!",
  });
});
app.listen(3030, () => console.log("Server is init..."));
