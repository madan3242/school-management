import app from "./src/app";
import dotenv from "dotenv";
import { pool } from "./src/config/database";
dotenv.config();

app.listen(process.env.PORT, () => {
    pool.connect((err) => {        
        if (err) {
            throw err;
        }
        console.log(`DB CONNECTED`);
    })
    console.log(`Server running on ${process.env.PORT}`);
})