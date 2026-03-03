package springboot.example.projects.service;

import java.util.List;

import org.springframework.stereotype.Service;

import springboot.example.projects.models.Student;

public interface StudentService {
	
	Student saveStudent(Student student);
	List<Student> getAllStudents();
	Student getStudentById(Long id);
	Student updateStudent(Student student,Long id);
	void deleteStudent(Long id);	
}
