package com.basicstrong.Assignments.Assignment1;

import java.io.File;
import java.util.Scanner;
import java.util.regex.Pattern;

public class Regex {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.print("Enter a file name ");
            String regex = scanner.nextLine();
            if (regex.equalsIgnoreCase("quit")) {
                break;
            }
            searchFiles(new File( "C:/Users/RAHUL/IdeaProjects/untitled "), Pattern.compile(regex));
        }
    }

         static void searchFiles(File directory, Pattern pattern) {
        File[] files = directory.listFiles();
        if (files != null) {
            for (File file : files) {
                if (file.isDirectory()) {
                    searchFiles(file, pattern);
                } else if (pattern.matcher(file.getName()).matches()) {
                    System.out.println(file.getAbsolutePath());
                }
            }
        }
    }
}





