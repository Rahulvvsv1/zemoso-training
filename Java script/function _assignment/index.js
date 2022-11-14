let fun1 = () => {
    console.log("hello there function 1")
}


let func2 = (funn) => {
    funn();
    console.log("in function 2 ");
}


func2(fun1);

//Second question

let nameGen = (firstName,lastName) => {
    return firstName[0] + lastName[0];
}

let answer = nameGen("Rahul","Vuppala");
console.log(answer)