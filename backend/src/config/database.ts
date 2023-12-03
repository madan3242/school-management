import { Pool } from "pg";

import dotenv from "dotenv";
dotenv.config();

const DATABASE_URL = `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_NAME}`;

export const pool = new Pool({
    connectionString: DATABASE_URL
})

const create_students = `
    CREATE TABLE IF NOT EXISTS "students" (
	    "stud_id" SERIAL PRIMARY KEY,
	    "stud_name" VARCHAR(100) NOT NULL,
	    "stud_rollno" BIGINT NOT NULL,
        "stud_phoneno" BIGINT NOT NULL,
        "stud_address_city" VARCHAR(100) NOT NULL,
        "stud_address_pincode" VARCHAR(100) NOT NULL,
        "stud_gender" VARCHAR(100) NOT NULL,
        "year_of_enroll" VARCHAR(100) NOT NULL
    );
`;

const create_teachers = `
    CREATE TABLE IF NOT EXISTS "students" (
	    "teach_id" SERIAL PRIMARY KEY,
	    "teach_name" VARCHAR(100) NOT NULL,
	    "teach_phoneno" BIGINT NOT NULL,
        "teach_address_city" VARCHAR(100) NOT NULL,
        "teach_address_pincode" VARCHAR(100) NOT NULL,
        "teach_gender" VARCHAR(100) NOT NULL,
        "qualification" VARCHAR(100) NOT NULL,
        "teach_regno" VARCHAR(100) NOT NULL
    );
`
export function query(text: string) {
    return new Promise((resolve, reject) => {
        pool
            .query(text)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            })
    })
}

// query(create_students).then(() => console.log('Students table created')).catch((err) => console.log(err))
// query(create_teachers).then(() => console.log('Teachers table created')).catch((err) => console.log(err))