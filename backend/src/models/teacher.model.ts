import { query } from "../config/database";
import { ApiError } from "../utils/ApiError";

const Teacher = {
    async createTeacherRecord(body : any) {
        try {
            let { 
                teach_name, 
                teach_regno,
                teach_phoneno,  
                teach_address_city,  
                teach_address_pincode,  
                teach_gender,  
                qualification 
            } = body;
            console.log(body);
            
            const text = `INSERT INTO teachers 
                            ( 
                                teach_name, 
                                teach_regno,
                                teach_phoneno, 
                                teach_address_city, 
                                teach_address_pincode, 
                                teach_gender, 
                                qualification 
                            ) VALUES (
                                '${teach_name}', 
                                '${teach_regno}',
                                '${teach_phoneno}', 
                                '${teach_address_city}', 
                                '${teach_address_pincode}', 
                                '${teach_gender}', 
                                '${qualification}'
                            );`;
            
            console.log(text);
            
            const data: any = await query(text);
            console.log(data);
            
            return data;
        } catch (error) {
            console.error(error);
            return error
        }
    },
    async readAllRecords () {
        try {
            const text = `SELECT * FROM teachers`
            const data: any = await query(text);
            
            return data.rows;
        } catch (error) {
            return error
        }
    },
    async readOneRecord (regno: string) {
        try {
            const text = `SELECT * FROM teachers WHERE teach_regno='${regno}'`;
            const data: any = await query(text);
            
            return data.rows[0];
        } catch (error) {
            // console.log(error);
            throw new ApiError(404, "Student Record Not found");
            // return error
        }
    },
    async updateOneRecord(regno: string, body: any) {
        try {
            let { 
                teach_name, 
                teach_regno,
                teach_phoneno,  
                teach_address_city,  
                teach_address_pincode,  
                teach_gender,  
                qualification 
            } = body;
            console.log(body);

            const text = `
                UPDATE teachers
                SET teach_name = '${teach_name}', 
                    teach_regno = '${teach_regno}', 
                    teach_phoneno = '${teach_phoneno}', 
                    teach_address_city = '${teach_address_city}',
                    teach_address_pincode = '${teach_address_pincode}',
                    teach_gender = '${teach_gender}', 
                    qualification = '${qualification}'
                WHERE teach_regno = '${regno}';
                `

            const data: any = await query(text);

            return data;
        } catch (error) {
            return error
        }
    },
    async deleteOneRecord(regno: string) {
        try {
            const text = `DELETE FROM teachers WHERE teach_regno='${regno}';`;
            
            const response = await query(text);

            console.log(response);
            return response;
        } catch (error) {
            return error
        }
    }
}

export default Teacher;