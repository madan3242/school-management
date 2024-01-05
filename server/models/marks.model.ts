import { query } from "../config/database";

export const Marks = {
  async createMarksRecords(marks: number, sub_id: string, stud_rollno: string) {
    try {
      const text = `INSERT INTO "marks" (marks, sub_id, stud_rollno) values ('${marks}', '${sub_id}', '${stud_rollno}');`;

      const data: any = await query(text);
      console.log(data);

      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  async getMarksRecordsById(stud_rollno: string) {
    try {
      const text = `SELECT sub_name, marks FROM marks LEFT JOIN subjects ON marks.sub_id=subjects.sub_id WHERE stud_rollno = '${stud_rollno}';`;

      const data: any = await query(text);
      // console.log(data);
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  async updateMarksById(marks: number, sub_id: string, stud_rollno: string) {
    try {
      const text = `UPDATE "marks" SET ${sub_id}=${marks} WHERE stud_rollno = ${stud_rollno}`;
      const data: any = await query(text);
      return data;
    } catch (error) {
      return error;
    }
  },
  async deleteMarksById(stud_rollno: string) {
    try {
      const text = `DELETE FROM marks WHERE stud_rollno='${stud_rollno}';`;
      const data: any = await query(text);
      return data;
    } catch (error) {
      return error;
    }
  },
};
