package springboot.example.projects.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import springboot.example.projects.models.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {

}
