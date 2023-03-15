package com.basicstrong.Assignments.Assignment5.rahul.assignment.singleton;

public class singleton {
     String data;
     public singleton initialilzeData(String s){
        this.data = s;
        singleton single = new singleton();
        return single;
    }
    public void printString(){
        System.out.println(this.data);
    }
}
