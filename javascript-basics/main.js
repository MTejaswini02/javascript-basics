//about console and its methods
/* console.log("Hello world");
console.warn("this is a warning")
console.error("this is a n error")

// let,const,var
const age=24;
console.log(age);

const food="mango";
console.log(food[2]);
*/
//string,numbers,boolean,null,undefined,symbol
/* const iscool=true;
const rating=4.9;
const x=null;
const y=undefined;
console.log(typeof rating);
console.log(typeof x);
console.log(typeof y);

//concatenation
console.log("This is " + food + " and I am " + age);
//template strings

const hello =`This is ${food} and I am ${age}`;
console.log(hello);
console.log(hello.length);
console.log(food.substring(0, 3).toUpperCase());
const s="Hello world";
console.log(s.split(', '));
*/
//arrays
/* const numbers=new Array(1,2,3,4,5);
const fruits=['apples','oranges','banana','cherries',10,false];
fruits[2]='grapes';
fruits.push('mangoes');
fruits.unshift('cocunut');
fruits.pop();
console.log(Array.isArray('mangoes'));
console.log(fruits);
console.log(fruits.indexOf('grapes'));
console.log(fruits[2]);
const person={
    firstName: 'teju',
    lastName: 'cat',
    age:30,
    hobbies:['music','movies','sports'],
    address: {
        street:"50 main st",
        city:'boston',
        state:'ma'
    }
}
person.email='teju@email.com';
console.log(person);
console.log(person.address.city);
*/
//loops
/*
//for
for(let i=0;i<5;i++){
    console.log(i);
}
//while
let i=0;
while(i<5){
    console.log(i);
    i++;
}
*/
/*const todos= [
    {
      id:1,
      text:"meeting",
      isCompleted:true
    },
    {
      id:2,
      text:"dinner",
      isCompleted:true  
    },
    {
      id:3,
      text:"playing",
      isCompleted:false 
    }
];
//foreach,map,filter
todos.forEach(function(todo){
    console.log(todo.text);
});
//map
const todoText = todos.map(function(todo){
    return todo.id;
});
console.log(todoText);
//filter
const todoCompleted=todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})
console.log(todoCompleted);
*/
//conditions
/*const x=4;

if(x===10){
    console.log("x is 10");
}else if(x>10){
    console.log("x is greater than 10");
}else{
    console.log('x is smaller than 10');
}
//ternary operator
const color = x > 3? 'blue' : 'red';
console.log(color);
//switch 
switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is pink');
        break;
}
*/
//functions
function addNums(num1 = 12, num2 = 3){
   return num1 + num2;
}
console.log(addNums());
//another way
const subNums = (num1 = 5, num2 = 2) => num1 - num2;
console.log(subNums(10,3));
//oop
//constructor function
/*function person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
}*/
//class-is a different way of doing
class person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${lastName}`;
    }
}

//instructor object
const person1 = new person('john','rex','7-2-2004');
const person2 = new person('jake','rex','3-6-1970');
const person3 = new person('joe','rex','2-6-2006');
const person4 = new person('jesly','rex','12-8-2024');

console.log(person2.firstName);
console.log(person4.dob);
console.log(person1.getBirthYear());
console.log(person1);

//single,multiple elememt selectors
console.log(window);
alert(1);

//document object model(dom)
//document.getElementBtId(), document.querySelector(), document.querySelectorAll(), document.getElementByClassName(), document.getElementByTagName()