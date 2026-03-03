import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;
const STUDENT_BASE_URL = `${BASE_URL}/api/students`;

class StudentService {

    getStudents() {
        return axios.get(STUDENT_BASE_URL);
    }

    createStudent(student) {
        return axios.post(STUDENT_BASE_URL, student);
    }

    getStudentById(studentId) {
        return axios.get(`${STUDENT_BASE_URL}/${studentId}`); 
    }

    updateStudent(studentId, student) {
        return axios.put(`${STUDENT_BASE_URL}/${studentId}`, student);
    }

    deleteStudent(studentId) {
        return axios.delete(`${STUDENT_BASE_URL}/${studentId}`);
    }
}

export default new StudentService();