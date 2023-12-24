import { query } from "../config/database";

export const subjects = {
  async createSubjectRecords(sub_id: string, sub_name: string, teach_regno: string) {
    try {
      const text = `INSERT INTO "subjects" (sub_id, sub_name, teach_regno) values ('${sub_id}', '${sub_name}', '${teach_regno}');`;

      const data: any = await query(text);
      console.log(data);

      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  async viewSubjects() {
    try {
      const text = `SELECT * FROM subjects`;
      const data:any = await query(text);      
      return data.rows;
    } catch (error) {
      return error;
    }
  }
};
