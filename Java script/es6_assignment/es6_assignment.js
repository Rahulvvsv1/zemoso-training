//first question
const printName = name => "Hi" + name;
console.log(printName("rahul"))


//second question
const printBill = (name,bill) => {
    return `Hi ${name} please papy bill ${bill}`
}
console.log(printBill("Rahul",500))


//Third question
const person = {
    name: "Noam Chomsky",
    age: 92
}
let {name,age} = person
console.log(name,age)
