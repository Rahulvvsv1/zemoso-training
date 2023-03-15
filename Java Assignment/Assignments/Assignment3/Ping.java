package com.basicstrong.Assignments.Assignment3;
import java.net.InetAddress;
import java.time.temporal.ChronoUnit;

import java.util.*;
import java.time.*;
public class Ping {
    public static void main(String[] args){
        try {
            InetAddress address = InetAddress.getByName("www.google.com");
            ArrayList<Double> times = new ArrayList<>();
            for(int i =0;i<10;i++){
                LocalTime time = LocalTime.now();
                boolean reachable = false;
                LocalTime time2;
                while(!reachable){
                    reachable = address.isReachable(10000);

                }
                time2 = LocalTime.now();
//                System.out.println("Is host reachable? " + reachable);
//                System.out.println(time);
//                System.out.println(time2);
              double time3 = ChronoUnit.MILLIS.between(time, time2) ;
                times.add(time3);
                System.out.println("time difference"+time3);
            }
            int size = times.size();
            double median;
            if (size % 2 == 0) {
                int index1 = size / 2;
                int index2 = index1 - 1;
                median = (double) (times.get(index1) + times.get(index2)) / 2;
            } else {
                int index = size / 2;
                median = (double) times.get(index);
            }
            System.out.println("Median of time taken to ping is"+median);


        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
