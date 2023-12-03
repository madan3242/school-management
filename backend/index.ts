import app from "./src/app";
import dotenv from "dotenv";
dotenv.config();

app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
})