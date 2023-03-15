package com.basicstrong.Assignments.Assignment11;

import java.io.*;
import java.util.*;

public class CharCounter {

    public static void main(String[] args) {
        if (args.length != 1) {
            System.out.println("Usage: java CharCounter <filename>");
            return;
        }
        String filename = args[0];
        Map<Character, Integer> charCounts = new HashMap<>();
        try {
            BufferedReader reader = new BufferedReader(new FileReader(filename));
            String line;
            while ((line = reader.readLine()) != null) {
                for (char c : line.toCharArray()) {
                    Integer count = charCounts.get(c);
                    if (count == null) {
                        count = 0;
                    }
                    charCounts.put(c, count + 1);
                }
            }
            reader.close();
            PrintWriter writer = new PrintWriter(new FileWriter("charcounts.txt"));
            for (Map.Entry<Character, Integer> entry : charCounts.entrySet()) {
                writer.println(entry.getKey() + ": " + entry.getValue());
            }
            writer.close();
            System.out.println("Character counts saved to charcounts.txt");
        } catch (IOException e) {
            System.out.println("Error reading or writing file: " + e.getMessage());
        }
    }
}