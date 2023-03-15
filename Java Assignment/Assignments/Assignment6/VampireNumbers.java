package com.basicstrong.Assignments.Assignment6;

import java.util.ArrayList;
import java.util.List;

public class VampireNumbers {

    public static void main(String[] args) {
        List<Long> vampireNumbers = new ArrayList<>();
        long start = 10;
        // smallest possible vampire number
        while (vampireNumbers.size() < 100) {
            if (isVampireNumber(start)) {
                vampireNumbers.add(start);
            }
            start++;
        }
        System.out.println("First 100 vampire numbers are:");
        for (long vampireNumber : vampireNumbers) {
            System.out.println(vampireNumber);
        }
    }

    private static boolean isVampireNumber(long number) {
        String str = Long.toString(number);
        int length = str.length();
        if (length % 2 != 0) {
            return false;
            // number must have even digits
        }
        int[] digits = new int[length];
        for (int i = 0; i < length; i++) {
            digits[i] = str.charAt(i) - '0';
        }
        int half = length / 2;
        List<int[]> permutations = new ArrayList<>();
        generatePermutations(digits, 0, length - 1, permutations);
        for (int[] permutation : permutations) {
            if (permutation[0] == 0 && permutation[half] == 0) {
                continue;
                // numbers cannot have trailing zeroes
            }
            long x = 0;
            long y = 0;
            for (int i = 0; i < half; i++) {
                x = x * 10 + permutation[i];
            }
            for (int i = half; i < length; i++) {
                y = y * 10 + permutation[i];
            }
            if (x * y == number) {
                return true;
            }
        }
        return false;
    }

    private static void generatePermutations(int[] digits, int start, int end, List<int[]> permutations) {
        if (start == end) {
            permutations.add(digits.clone());
        } else {
            for (int i = start; i <= end; i++) {
                swap(digits, start, i);
                generatePermutations(digits, start + 1, end, permutations);
                swap(digits, start, i);
            }
        }
    }

    private static void swap(int[] array, int i, int j) {
        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
