import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import apiRoutes from "./routes/api.js";
import adminRoutes from "./routes/admin.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/v1", apiRoutes);
app.use("/api/v1/admin", adminRoutes);

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  })
  .catch(err => console.error("Mongo Error:", err));
