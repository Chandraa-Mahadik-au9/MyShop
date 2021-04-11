import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import productsList from "./data/products.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("API running successfully :).");
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(
    `Server successfully running in ${process.env.NODE_ENV} mode on port : ${PORT}.`
      .blue.bold
  );
});
