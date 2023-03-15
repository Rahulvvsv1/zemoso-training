package com.basicstrong.Assignments.Assignment12;

import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicReference;
import java.util.stream.Stream;
import java.util.stream.Collectors;

public class Student {
    private int id;
    private String name;
    private int age;
    private String gender;
    private String engDepartment;
    private int yearOfEnrollment;
    private double perTillDate;

    public Student(int id, String name, int age, String gender, String engDepartment, int yearOfEnrollment, double perTillDate) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.engDepartment = engDepartment;
        this.yearOfEnrollment = yearOfEnrollment;
        this.perTillDate = perTillDate;
    }

    public String getName() {
        return name;
    }

    public int getYearOfEnrollment() {
        return yearOfEnrollment;
    }

    public String getGender() {
        return gender;
    }

    public String getEngDepartment() {
        return engDepartment;
    }

    public double getPerTillDate() {
        return perTillDate;
    }

    public int getAge() {
        return age;
    }

    @Override
    public String toString() {
        return getName();
    }

    public static void main(String[] args) {
        List<Student> students = Arrays.asList(
                new Student(111, "Jiya Brein" , 17, "Female", "Computer Science", 2018, 70.8),
                new Student(122, "Paul Niksui"  , 18, "Male", "Mechanical", 2016, 50.2),
                new Student(133, "Martin Theron", 17, "Male", "Electronic", 2017, 90.3),
                new Student(144, "Murali Gowda", 18, "Male", "Electrical", 2018, 80),
                new Student(155, "Nima Roy", 19, "Female", "Textile", 2016, 70),
                new Student(166, "Iqbal Hussain", 18, "Male", "Security", 2016, 70),
                new Student(177, "Manu Sharma", 16, "Male", "Chemical", 2018, 70),
                new Student(188, "Wang Liu", 20, "Male", "Computer Science", 2015, 80),
                new Student(199, "Amelia Zoe", 18, "Female", "Computer Science", 2016, 85),
                new Student(200, "Jaden Dough", 18, "Male", "Security", 2015, 82),
                new Student(211, "Jasna Kaur", 20, "Female", "Electronic", 2019, 83),
                new Student(222, "Nitin Joshi", 19, "Male", "Textile", 2016, 60.4),
                new Student(233, "Jyothi Reddy", 16, "Female", "Computer Science", 2015, 45.6),
                new Student(244, "Nicolus Den", 16, "Male", "Electronic", 2017, 95.8),
                new Student(255, "Ali Baig", 17, "Male", "Electronic", 2018, 88.4),
                new Student(266, "Sanvi Pandey", 17, "Female", "Electric", 2019, 72.4),
                new Student(277, "Anuj Chettiar", 18, "Male", "Computer Science", 2017, 57.5)
        );




        getAllDepartments(students);
        studentsAfter2018(students);
        maleStudentsInCse(students);
        avgAges(students);
        studentsInDepartments(students);

    }
    public static void getAllDepartments(List<Student> s){
        Stream<Student> streamData = s.stream();
        streamData.forEach(n->n.getEngDepartment());
    }
    public static void studentsAfter2018(List<Student> s){
        Stream<Student> streamData = s.stream();
        Integer number = 10 ;

        streamData.forEach(n->{
            if(n.getYearOfEnrollment() > 2018){
                System.out.println(n.getName());
            }
        });
    }

    public static void maleStudentsInCse(List<Student> s){
        Stream<Student> streamData = s.stream();
        streamData.forEach(n->{
            if(n.getEngDepartment() == "Computer Science"){
                if(n.getGender() == "Male"){
                    System.out.println(n.getName());
                }
            }
        });
    }

    public  static void avgAges(List<Student>s){

        Stream<Student> streamData = s.stream();
        AtomicReference<Integer> avgMale = null;
        AtomicInteger avgFemale=new AtomicInteger();
        AtomicInteger maleCount= new AtomicInteger();
        AtomicInteger femaleCount=new AtomicInteger();

        streamData.forEach(n->{
                if(n.getGender() == "Male"){
                    avgMale.set(avgMale.get() + n.getAge());
                    maleCount.set(maleCount.get() + 1);
                }
                if(n.getGender() == "Female"){
                    avgFemale.set(avgFemale.get() + n.getAge());
                    femaleCount.set(femaleCount.get() + 1);
                }

        });
        System.out.println("The no.of of boy students are"+maleCount.get());
        System.out.println("The no.of girl students are"+femaleCount.get());
        System.out.println("Average age of male is " + (avgMale.get()/maleCount.get()));
        System.out.println("Average age of female is " + (avgFemale.get()/femaleCount.get()));

    }
    public void calculateAverageAge(List<Student> studentList){

        OptionalDouble malesAvgerageAge = studentList.stream()
                .filter(student -> student.gender.equals("Male"))
                .mapToInt(student -> student.age).average();

        OptionalDouble femalesAverageAge = studentList.stream()
                .filter(student -> student.gender.equals("Female"))
                .mapToInt(student -> student.age).average();

        System.out.printf("Male's Average Age : %.2f",malesAvgerageAge.getAsDouble());
        System.out.println();
        System.out.printf("Female's Average Age : %.2f",femalesAverageAge.getAsDouble());
        System.out.println();
    }
    public  static void higestPercentage(List<Student>s){

        Stream<Student> streamData = s.stream();
        AtomicReference<Double> highestPercentage= new AtomicReference<>(0.0);

        streamData.forEach(n-> {
            if (n.getPerTillDate() > highestPercentage.get()) {
                highestPercentage.set(n.getPerTillDate());
            }
        });

        System.out.println("The highest percentage a student got is " + highestPercentage.get());


    }
    public  static void studentsInDepartments(List<Student>s){

        Map<String,List<Student>> studentByDeparment = new HashMap<>();
        studentByDeparment = s.stream().collect(Collectors.groupingBy(Student::getEngDepartment));
        System.out.println(studentByDeparment);


    }





    



}
