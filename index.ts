import app from "./src/app";
import { PORT } from "./src/config";
import { pool } from "./src/config/database";

app.listen(PORT, () => {
    pool.connect((err) => {        
        if (err) {
            throw err;
        }
        console.log(`DB CONNECTED`);
    })
    console.log(`Server running on ${PORT}`);
})