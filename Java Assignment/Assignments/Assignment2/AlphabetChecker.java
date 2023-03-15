package com.basicstrong.Assignments.Assignment2;

public class AlphabetChecker {
    public static boolean containsAllAlphabets(String str) {
        boolean[] alphabet = new boolean[26];
        int index;


        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if (ch >= 'a' && ch <= 'z') {
                index = ch - 'a';
            } else if (ch >= 'A' && ch <= 'Z') {
                index = ch - 'A';
            } else {
                continue;
            }
            alphabet[index] = true;
        }

        // Check if all alphabets are present
        for (boolean present : alphabet) {
            if (!present) {
                System.out.println("Sentence dosent contain all alphabets");
                return false;
            }
        }
        System.out.println("sentence contains all alphabets");
        return true;
    }
    public static void main(String[] args){
        AlphabetChecker ac = new AlphabetChecker();
        AlphabetChecker.containsAllAlphabets("Hello there how are you oding?");

    }
}


