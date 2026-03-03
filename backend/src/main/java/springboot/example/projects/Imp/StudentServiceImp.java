package springboot.example.projects.Imp;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springboot.example.projects.models.Student;
import springboot.example.projects.repository.StudentRepository;
import springboot.example.projects.service.StudentService;

@Service
public class StudentServiceImp implements StudentService {
	
		@Autowired
		private StudentRepository es;
	
	@Override
	public Student saveStudent(Student student) {
		return es.save(student);
	}
	
	@Override
	public List<Student> getAllStudents() {
		return es.findAll();
	}
	
	@Override
	public Student getStudentById(Long id) {
		return es.findById(id).orElseThrow(() ->
		new ArithmeticException());
	}
	
	@Override
	public Student updateStudent(Student student,Long id) {
		Student existingStudent = es.findById(id).orElseThrow(
				() -> new ArithmeticException());
		existingStudent.setName(student.getName());
		existingStudent.setNumber(student.getNumber());
		existingStudent.setDepartment(student.getDepartment());
		existingStudent.setYear(student.getYear());
		es.save(existingStudent);
		return existingStudent;
	}
	
    @Override
    public void deleteStudent(Long id) {

        es.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Student not found with id: " + id));

        es.deleteById(id);
    }
}
