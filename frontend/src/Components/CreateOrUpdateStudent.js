import { useEffect, useState } from "react";
import StudentService from "../Services/StudentService";
import { useNavigate, useParams } from "react-router-dom";
import "../CSS/Create.css";

const CreateOrUpdateStudent = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const studentId = Number(id);
  const isAddMode = studentId < 0;

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    if (isAddMode) return;

    StudentService.getStudentById(studentId)
      .then((res) => {
        const student = res.data;
        setName(student.name);
        setNumber(student.number);
        setDepartment(student.department);
        setYear(student.year);
      })
      .catch((err) => console.error(err));
  }, [studentId, isAddMode]);

  const saveOrUpdateStudent = (e) => {
    e.preventDefault();

    const student = { name, number, department, year };

    if (isAddMode) {
      StudentService.createStudent(student)
        .then(() => navigate("/"))
        .catch((err) => console.error(err));
    } else {
      StudentService.updateStudent(studentId, student)
        .then(() => navigate(`/view-student/${studentId}`))
        .catch((err) => console.error(err));
    }
  };

  const cancel = () => {
    navigate("/");
  };

  return (
    <div className="create-container">
      <div className="create-card">
        <h2 className="create-title">
          {isAddMode ? "Add Student" : "Update Student"}
        </h2>

        <form onSubmit={saveOrUpdateStudent} className="create-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Number</label>
            <input
              type="tel"
              placeholder="Enter Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Department</label>
            <input
              type="text"
              placeholder="Enter Department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Year</label>
            <input
              type="number"
              placeholder="Enter Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            />
          </div>

          <div className="button-group">
            <button type="submit" className="btn-save">
              Save
            </button>
            <button type="button" className="btn-cancel" onClick={cancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateOrUpdateStudent;