import app from "./app";
import { PORT } from "./config";
import { pool } from "./config/database";

app.listen(PORT, () => {
    pool.connect((err) => {        
        if (err) {
            throw err;
        }
        console.log(`DATABASE CONNECTED`);
    })
    console.log(`Server running on ${PORT}`);
})