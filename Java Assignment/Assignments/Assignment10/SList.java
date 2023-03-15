package com.basicstrong.Assignments.Assignment10;



public class SList<T> {

    private Link<T> head = new Link<T>(null);

    public SListIterator<T> iterator() {
        return new SListIterator<T>(head);
    }

    private static class Link<T> {
        T element;
        Link<T> next;

        Link(T element) {
            this.element = element;
        }
    }

    public static class SListIterator<T> {
        Link<T> current;

        SListIterator(Link<T> head) {
            current = head;
        }

        public boolean hasNext() {
            return current.next != null;
        }

        public T next() {
            current = current.next;
            return current.element;
        }

        public void insert(T element) {
            current.next = new Link<T>(element);
            current = current.next;
        }

        public void remove() {
            current.next = current.next.next;
        }
    }

    @Override
    public String toString() {
        if (head.next == null) {
            return "[]";
        }
        StringBuilder sb = new StringBuilder();
        sb.append("[");
        SListIterator<T> it = iterator();
        while (it.hasNext()) {
            T element = it.next();
            sb.append(element);
            if (it.hasNext()) {
                sb.append(", ");
            }
        }
        sb.append("]");
        return sb.toString();
    }
}

