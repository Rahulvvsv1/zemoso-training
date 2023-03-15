package com.basicstrong.Assignments.Assignment9;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Main {
    public static void main(String[] args) {
        String sentence = "Hello my name is rahul and Im doing fine" ;
        String regex = "^[A-Z].*[.]$";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(sentence);
        boolean matches = matcher.matches();
        System.out.println(matches);
    }
}
