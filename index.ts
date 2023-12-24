import app from "./server/app";
import { PORT } from "./server/config";
import { pool } from "./server/config/database";

app.listen(PORT, () => {
    pool.connect((err) => {        
        if (err) {
            throw err;
        }
        console.log(`DATABASE CONNECTED`);
    })
    console.log(`Server running on ${PORT}`);
})