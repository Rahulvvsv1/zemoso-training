package com.basicstrong.Assignments.Assignment8;
 class ScreenOffException extends Exception {
    public ScreenOffException(String message) {
        super(message);
    }
}

 class AuthenticationException extends Exception {
    public AuthenticationException(String message) {
        super(message);
    }
}

 class FileNotFoundException extends Exception {
    public FileNotFoundException(String message) {
        super(message);
    }
}
public class ThreeExceptions {
     public static void throwAllExceptions()  throws ScreenOffException,AuthenticationException,FileNotFoundException {
         throw new ScreenOffException("Exception 1");
//         throw new AuthenticationException("Exceotion 2");
//         throw new FileNotFoundException("Exceotion 3");
     }


}
