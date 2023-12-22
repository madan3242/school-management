import { Pool } from "pg";

import dotenv from "dotenv";
dotenv.config();

const DATABASE_URL = `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_NAME}`;

export const pool = new Pool({
    connectionString: DATABASE_URL
})

const create_students = `
    CREATE TABLE IF NOT EXISTS "students" (
	    "stud_id" SERIAL,
	    "stud_rollno" BIGINT PRIMARY KEY,
	    "stud_name" VARCHAR(100) NOT NULL,
        "stud_phoneno" BIGINT NOT NULL,
        "stud_address_city" VARCHAR(100) NOT NULL,
        "stud_address_pincode" VARCHAR(100) NOT NULL,
        "stud_gender" VARCHAR(100) NOT NULL,
        "year_of_enroll" VARCHAR(100) NOT NULL
    );
`;

const create_teachers = `
    CREATE TABLE IF NOT EXISTS "teachers" (
	    "teach_id" SERIAL,
	    "teach_name" VARCHAR(100) NOT NULL,
	    "teach_phoneno" BIGINT NOT NULL,
        "teach_address_city" VARCHAR(100) NOT NULL,
        "teach_address_pincode" VARCHAR(100) NOT NULL,
        "teach_gender" VARCHAR(100) NOT NULL,
        "qualification" VARCHAR(100) NOT NULL,
        "teach_regno" VARCHAR(100) PRIMARY KEY
    );
`;

const create_subjects = `
        CREATE TABLE IF NOT EXISTS "subjects" (
            "sub_id" VARCHAR(100) PRIMARY KEY,
            "sub_name" VARCHAR(100) NOT NULL,
            "teach_regno" VARCHAR NOT NUll,
            CONSTRAINT fk_teachers
                FOREIGN KEY(teach_regno)
                    REFERENCES teachers(teach_regno)
        );
`;

const create_marks = `
        CREATE TABLE IF NOT EXISTS "marks" (
            "marks" BIGINT NOT NULL,
            "sub_id" VARCHAR(100) NOT NULL,
            "stud_rollno" BIGINT NOT NUll,
            CONSTRAINT fk_students
                FOREIGN KEY(stud_rollno)
                    REFERENCES students(stud_rollno),
            CONSTRAINT fk_subjects
                FOREIGN KEY(sub_id)
                    REFERENCES subjects(sub_id)
        );
`;

// SELECT sub_name, marks FROM marks RIGHT JOIN subjects ON marks.sub_id=subjects.sub_id WHERE stud_rollno = '1';
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
// query(create_subjects).then(() => console.log('Subjects table created')).catch((err) => console.log(err))
// query(create_marks).then(() => console.log('Marks table created')).catch((err) => console.log(err))

// query(`DROP TABLE students`).then(() => console.log('Students table dropped')).catch((err) => console.log(err))
// query(`DROP TABLE teachers`).then(() => console.log('Teachers table dropped')).catch((err) => console.log(err))
// query(`DROP TABLE subjects`).then(() => console.log('Subjects table dropped')).catch((err) => console.log(err))
// query(`DROP TABLE marks`).then(() => console.log('Marks table dropped')).catch((err) => console.log(err))