package com.basicstrong.Assignments.Assignment8;
import com.basicstrong.Assignments.Assignment8.ThreeExceptions;
public class Main {
    public static void main(String[] args) {
        try {
            ThreeExceptions.throwAllExceptions();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        } finally {
            System.out.println("Finally block executed");
        }
    }
}