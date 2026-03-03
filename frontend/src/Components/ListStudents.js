import { useEffect, useState } from "react";
import StudentService from "../Services/StudentService";
import { useNavigate } from "react-router-dom";
import "../CSS/List.css";

const ListStudents = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    StudentService.getStudents()
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const editStudent = (studentId) => {
    navigate(`/add-student/${studentId}`);
  };

  const deleteStudent = (studentId) => {
    StudentService.deleteStudent(studentId)
      .then(() => {
        setStudents((prevStudents) =>
          prevStudents.filter((std) => std.id !== studentId)
        );
      })
      .catch((err) => console.error(err));
  };

  const viewStudent = (studentId) => {
    navigate(`/view-student/${studentId}`);
  };

  return (
    <div className="list-container">
      <div className="list-card">
        <h2 className="list-title">List of Students</h2>

        <div className="table-wrapper">
          <table className="student-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Number</th>
                <th>Department</th>
                <th>Year</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {students.length > 0 ? (
                students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.number}</td>
                    <td>{student.department}</td>
                    <td>{student.year}</td>
                    <td className="action-buttons">
                      <button
                        className="btn-update"
                        onClick={() => editStudent(student.id)}
                      >
                        Update
                      </button>

                      <button
                        className="btn-delete"
                        onClick={() => deleteStudent(student.id)}
                      >
                        Delete
                      </button>

                      <button
                        className="btn-view"
                        onClick={() => viewStudent(student.id)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="no-data">
                    No Students Available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListStudents;