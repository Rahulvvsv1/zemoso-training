package com.basicstrong.Assignments.Assignment4;

import java.util.Scanner;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;


public class Dates {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        Integer n = Integer.parseInt(sc.nextLine());
        for(int i =0;i<n;i++){
            String[] bothDates = new String[2];
            bothDates = sc.nextLine().split(" ");
            LocalDate signupDate = LocalDate.parse(bothDates[0],DateTimeFormatter.ofPattern("dd-MM-yyyy"));
            LocalDate currentDate = LocalDate.parse(bothDates[1],DateTimeFormatter.ofPattern("dd-MM-yyyy"));
//            System.out.println(signupDate);
//            System.out.println(currentDate);
            LocalDate startDate = signupDate.minusDays(30);
            LocalDate endDate = signupDate.plusDays(30);
            // make sure start date is not before signup date
            if (currentDate.isBefore(startDate)) {
                System.out.println("No range");
            }
            else{
                System.out.println(startDate.toString()+ " "+ endDate.toString());
            }

        }
    }
}
