package com.basicstrong.Assignments.Assignment10;
import com.basicstrong.Assignments.Assignment10.SList;
public class Main {
    public static void main(String[] args) {
        SList<String> list = new SList<>();
        SList.SListIterator<String> it = list.iterator();
        it.insert("Rahul");
        it.insert("Vuppala");
        System.out.println(list);

    }
}
