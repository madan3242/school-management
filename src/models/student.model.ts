import { query } from "../config/database"
import { ApiError } from "../utils/ApiError";
// import { v4 as uuid } from "uuid";

type studentData = {
    stud_name:string, 
    stud_rollno:number, 
    stud_phoneno:number,  
    stud_address_city:string,  
    stud_address__pincode:number,  
    stud_gender:string,  
    year_of_enroll:number
}

const Student = {
    async createStudentRecord(body : studentData) {
        try {
            // const stud_id = uuid();            
            let { 
                stud_name, 
                stud_rollno, 
                stud_phoneno,  
                stud_address_city,  
                stud_address__pincode,  
                stud_gender,  
                year_of_enroll
            } = body;
            
            const text = `INSERT INTO students 
                            ( 
                                stud_name, 
                                stud_rollno, 
                                stud_phoneno, 
                                stud_address_city, 
                                stud_address_pincode, 
                                stud_gender, 
                                year_of_enroll
                            ) VALUES (
                                '${stud_name}', 
                                '${stud_rollno}', 
                                '${stud_phoneno}', 
                                '${stud_address_city}', 
                                '${stud_address__pincode}', 
                                '${stud_gender}', 
                                '${year_of_enroll}'
                            );`;
            
            // console.log(text);
            
            const data: any = await query(text);

            return data;
        } catch (error) {
            console.error(error);
            return error
        }
    },
    async readAllRecords () {
        try {
            const text = `SELECT * FROM students`
            const data: any = await query(text);            
            return data.rows;
        } catch (error) {
            return error
        }
    },
    async readOneRecord (rollno: string) {
        try {
            const text = `SELECT * FROM students WHERE stud_rollno='${rollno}'`;
            const data: any = await query(text);
            
            return data.rows[0];
        } catch (error) {
            // console.log(error);
            throw new ApiError(404, "Student Record Not found");
            // return error
        }
    },
    async updateOneRecord(rollno: string, body: studentData) {
        try {
            let { 
                stud_name, 
                stud_rollno, 
                stud_phoneno,  
                stud_address_city,  
                stud_address__pincode,  
                stud_gender,  
                year_of_enroll
            } = body;
            console.log(body);

            const text = `
                UPDATE students
                SET stud_name = '${stud_name}', 
                    stud_rollno = '${stud_rollno}', 
                    stud_phoneno = '${stud_phoneno}', 
                    stud_address_city = '${stud_address_city}',
                    stud_address_pincode = '${stud_address__pincode}',
                    stud_gender = '${stud_gender}', 
                    year_of_enroll = '${year_of_enroll}'
                WHERE stud_rollno = '${rollno}';
                `

            const data: any = await query(text);

            return data;
        } catch (error) {
            return error
        }
    },
    async deleteOneRecord(rollno: string) {
        try {
            const text = `DELETE FROM students WHERE stud_rollno='${rollno}';`;
            
            const response = await query(text);

            console.log(response);
            return response;
        } catch (error) {
            return error
        }
    }
    
}

export default Student;