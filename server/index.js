import express from "express";
import bodyParser from "body-parser";
import mongoos from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://isamazon:Bighead0622@cluster0.c3xnu.mongodb.net/test";
const PORT = process.env.PORT || 5000;

mongoos
  .connect(CONNECTION_URL, {
    useNEwUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT} `))
  )
  .catch((error) => console.log(error.message));

mongoos.set("useFindAndModify", false);

// Mongo db basek
