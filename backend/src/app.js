import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// registering routes
// import testRoutes from "./routes/testRoutes.js"
import menuRoutes from "./routes/menuRoutes.js";




dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    // console.log("Running app.js")
  res.send("Barrel Street API is live");
});

// Testing route
// app.use("/api/test", testRoutes);
app.use("/api/menu", menuRoutes);

export default app;