package com.basicstrong.Assignments.Assignment7;

abstract class Rodent {
    public Rodent() {
        System.out.println("This is a Rodent");
    }

    public abstract void eat();

    public abstract void sleep();

    public void run() {
        System.out.println("The Rodent is running");
    }
}

class Mouse extends Rodent {
    public Mouse() {
        System.out.println("This is a Mouse");
    }

    @Override
    public void eat() {
        System.out.println("The Mouse is eating");
    }

    @Override
    public void sleep() {
        System.out.println("The Mouse is sleeping");
    }
}

class Gerbil extends Rodent {
    public Gerbil() {
        System.out.println("This is a Gerbil");
    }

    @Override
    public void eat() {
        System.out.println("The Gerbil is eating");
    }

    @Override
    public void sleep() {
        System.out.println("The Gerbil is sleeping");
    }
}

class Hamster extends Rodent {
    public Hamster() {
        System.out.println("This is a Hamster");
    }

    @Override
    public void eat() {
        System.out.println("The Hamster is eating");
    }

    @Override
    public void sleep() {
        System.out.println("The Hamster is sleeping");
    }
}

public class Main {
    public static void main(String[] args) {
        Rodent[] rodents = new Rodent[3];
        rodents[0] = new Mouse();
        rodents[1] = new Gerbil();
        rodents[2] = new Hamster();

        for (Rodent rodent : rodents) {
            rodent.eat();
            rodent.sleep();
            rodent.run();
        }
    }
}
