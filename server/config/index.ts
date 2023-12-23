import dotenv from "dotenv";
dotenv.config();

// if (process.env.NODE_ENV !== "prod") {
//     let configFile = `./.env.${process.env.NODE_ENV}`
//     dotenv.config({ path: configFile});
// } else {
//     dotenv.config();
// }

let PORT = process.env.PORT;

let DATABASE_USER = process.env.DATABASE_USER;
let DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
let DATABASE_HOST = process.env.DATABASE_HOST;
let DATABASE_PORT = process.env.DATABASE_PORT;
let DATABASE_NAME = process.env.DATABASE_NAME;

export {
    PORT,
    DATABASE_HOST,
    DATABASE_PORT,
    DATABASE_USER,
    DATABASE_PASSWORD,
    DATABASE_NAME
}