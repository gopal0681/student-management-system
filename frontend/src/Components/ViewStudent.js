import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StudentService from "../Services/StudentService";
import img from '../Images/img.jpg';
import "../CSS/View.css";

const ViewStudent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState({
    name: "",
    number: "",
    department: "",
    year: ""
});

    useEffect(() => {
        StudentService.getStudentById(id)
            .then((res) => {
                console.log("API Response:", res.data);
                setStudent(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div className="view-card">
            <img className="card-img-top" src={img} alt="Student" />
            <div className="card-body">
                <h5 className="card-title">Student Details</h5>

                <ul className="list-group">
                    <li className="list-group-item"><strong>Name:</strong> {student.name}</li>
                    <li className="list-group-item"><strong>Number:</strong> {student.number}</li>
                    <li className="list-group-item"><strong>Department:</strong> {student.department}</li>
                    <li className="list-group-item"><strong>Year:</strong> {student.year}</li>
                </ul>

                <button 
                    onClick={() => navigate('/')} 
                    className="btn btn-primary back-btn"
                >
                    Back
                </button>
            </div>
        </div>
    );
};

export default ViewStudent;