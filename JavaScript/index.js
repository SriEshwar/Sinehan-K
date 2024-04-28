//console.log(`Hello`);
//console.log(`My Website`);
//window.alert('This is an alert');
//window.alert(`I started to learn`);
//let nam="Sinehan"
//let age=21;
//document.getElementById("h1").textContent=`Hi! I'm ${nam}`;
//document.getElementById("para").textContent=`My age is ${age}`;

//let x=20.9;
//console.log(typeof x);
//console.log(`The value of x is ${x}`);

//let un;
//un=window.prompt("What's your name");
//console.log(un);

/*let username;

document.getElementById("mybutton").onclick=function()
{
    username = document.getElementById("myinput").value;
    document.getElementById("h1").textContent=`Hello ${username}`;
}

const PI=3.14159;
let radius;
let circumference;
document.getElementById("mybutton").onclick=function()
{
    radius=document.getElementById("myinput").value;
    radius=Number(radius);
    circumference=2*PI*radius;
    document.getElementById("h3").textContent=circumference+" cm";
}

const dec=document.getElementById("decrease");
const r=document.getElementById("reset");
const inc=document.getElementById("increase");
let count=0;
dec.onclick=function()
{
    count--;
    document.getElementById("counterLabel").textContent=count;
}

inc.onclick=function()
{
    count++;
    document.getElementById("counterLabel").textContent=count;
}

r.onclick=function()
{
    count=0;
    document.getElementById("counterLabel").textContent=count;
}
let x=-3.21;
let y=2;
let z;

z=Math.min(x,y);
console.log(z);

const myButton=document.getElementById("myButton");
const label1=document.getElementById("l1");
const label2=document.getElementById("l2");
const label3=document.getElementById("l3");
const min=1;
const max=6;

let ran1;
let ran2;
let ran3;
myButton.onclick=function()
{
    ran1=Math.floor(Math.random()*(max-min))+min;
    ran2=Math.floor(Math.random()*(max-min))+min;
    ran3=Math.floor(Math.random()*(max-min))+min;
    label1.textContent=ran1;
    label2.textContent=ran2;
    label3.textContent=ran3;
}
let age;
document.getElementById("myButton").onclick=function()
{
    age=document.getElementById("myInput").value;
    age=Number(age);

    if(age>=18)
    {
        document.getElementById("result").textContent=`Eligible`;
    }
    else{
        document.getElementById("result").textContent=`Not Eligible`;
    }
}
const checkBox=document.getElementById("checkBox");
const visa=document.getElementById("visa");
const masterCard=document.getElementById("masterCard");
const payPal=document.getElementById("payPal");
const mySubmit=document.getElementById("mySubmit");
const subresult=document.getElementById("subresult");
const radresult=document.getElementById("radresult");

mySubmit.onclick=function()
{
    if(checkBox.checked)
    {
        subresult.textContent=`Subcribed`;
    }
    else{
        subresult.textContent=`Not Subcribed`;
    }

    if(visa.checked)
    {
        radresult.textContent=`You selected Visa`;
    }
    else if(masterCard.checked){
        radresult.textContent=`You selected MasterCard`;
    }
    else if(payPal.checked)
    {
        radresult.textContent=`You selected Paypal`;
    }
    else{
        radresult.textContent=`You need to select something`;
    }
}

let email="sinehan@gmail.com";
let firstname=email.slice(0,email.indexOf("@"));
let lastname=email.slice(email.indexOf("@")+1);
console.log(firstname);
console.log(lastname);

let username=window.prompt("Enter the username");
username=username.trim().charAt(0).toUpperCase()+username.trim().slice(1).toLowerCase();
console.log(username);
username=username.toLowerCase();
let letter=username.charAt(0).toUpperCase();
username=letter+username.slice(1);
console.log(username);

let username="";
while(username==="" || username===null)
{
    username=window.prompt("Enter the name");
}
console.log(`Hello ${username}`);

const minval=1;
const maxval=11;
const answer=Math.floor(Math.random()*(maxval-minval))+minval;

let running=true;
let guess;
let attempts=0;
while(running)
{
    guess=window.prompt("Enter a number between 1 and 10");
    guess=Number(guess);
    if(isNaN(guess))
    {
        window.alert("Enter a valid number");
    }
    else if(guess<minval || guess>maxval-1)
    {
        window.alert("Enter a valid number");
    }
    else if(guess>answer)
    {
        attempts++;
        window.alert("Your value is higher");
    }
    else if(guess<answer)
    {
        attempts++;
        window.alert("Your value is lower");
    }
    else{
        attempts++;
        window.alert(`Congratulations!You guessed right and you took ${attempts} attempts`);
        running=false;
    }
}

function happyBirthday(username,age)
{
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday to you dear ${username}!`);
    console.log(`Happy Birthday to you,you are ${age}!`);
}
function add(x,y)
{
    return x+y;
}
function isEmail(email)
{
    return email.includes("@") && email.includes(".com");
}
console.log(isEmail("Sinehan@gmail.com"));
console.log(add(2,3));

const textBox=document.getElementById("textBox");
const toFah=document.getElementById("toFah");
const toCel=document.getElementById("toCel");
const result=document.getElementById("result");
let temp;

function convert()
{
    if(toFah.checked)
    {
        temp=Number(textBox.value);
        temp=temp+10;
        result.textContent=temp;
    }
    else if(toCel.checked)
    {
        temp=Number(textBox.value);
        temp=temp-10;
        result.textContent=temp;
    }
    else{
        result.textContent="Select the unit";
    }
}

let fruits=["apple","banana","PineApple","coconut"];

fruits.unshift("mango");
fruits.shift();
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);

let fruits=["apple","banana","PineApple","coconut"];

let veg=["carrot","beetroot"];

let foods=[...fruits,...veg];
console.log(foods);

function fun(...foods)
{
    return foods;
}
console.log(fun("apple","mango","coconut"));


function fun()
{
    let values=[];
    let images=[];

    const nfd=document.getElementById("input").value;
    for(let i=0;i<nfd;i++)
    {
        values.push(Math.floor(Math.random()*6)+1);
    }
    document.getElementById("diceResult").textContent=`Dice: ${values.join(", ")}`
    
}

function generatePassword(length,includeLower,includeUpper,includeNumber,includeSymbol)
{
    let allowedChars="";
    let password="";

    const lowercase="abcdefghijklmnopqrstuvwxyz";
    const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers="1234567890";
    const symbols="!@#$%^&*()";
    if(includeLower)
    {
        allowedChars+=lowercase;
    }
    if(includeUpper)
    {
        allowedChars+=uppercase;
    }
    if(includeNumber)
    {
        allowedChars+=numbers;
    }
    if(includeSymbol)
    {
        allowedChars+=symbols;
    }
    if(length<=0)
    {
        return `Length should be atleast 1`;
    }
    if(allowedChars.length===0)
    {
        return `You should choose atleast one set`;
    }
    for(let i=0;i<length;i++)
    {
        const random=Math.floor(Math.random()*allowedChars.length);
        password+=allowedChars.charAt(random);
    }
    return password;
}

const password=generatePassword(12,true,true,true,true);
console.log(password);

function hello(callback)
{
    console.log("Hello!");
    callback();
}
function goodbye()
{
    console.log("Goodbye!");
}

hello(goodbye);

function sum(disp,x,y)
{
    const result=x+y;
    disp(result);
}
function display(result)
{
    console.log(result);
}
sum(display,3,2);

let arr=[1,2,3,4,5];
arr.forEach(double);
arr.forEach(display);
function double(element,index,array)
{
    array[index]=element*2;
}
function display(element)
{
    console.log(element);
}
let fruits=["apple","banana","mango"];

fruits.forEach(cap);
fruits.forEach(dis);

function cap(element,index,array)
{
    array[index]=element.charAt(0).toUpperCase()+element.slice(1);
}
function dis(element)
{
    console.log(element);
}

const dates=["2024-1-1","2024-1-2","2024-1-3"];
const formatted=dates.map(format);
console.log(formatted);
function format(element)
{
    const parts=element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

const words=["apple","mango","banana","pomogranite","coconut"];

const shortwords=words.filter(getShort);

console.log(shortwords);
function getShort(element)
{
    return element.length<=6;
}

const prices=[10,30,25,40,50];

const max=prices.reduce(sum);
console.log(max);
function sum(accumulator,element)
{
    return Math.min(accumulator,element);
}

const hello=function()
{
    console.log("Hello!");
}
hello();

setTimeout(function(){console.log("Hello!!");},3000);
const num=[1,2,3,6,5];

const sum=num.reduce((accumulator,element)=>{return accumulator+element;});
console.log(sum);

const person={
    firstName:"Sinehan",
    age:21,
    isEmployed:true,
    sayHi:function(){console.log(`Hello Everyone,this is ${this.firstName}`);},
}
person.sayHi();

function Car(a,b,c,d)
{
    this.make=a,
    this.model=b,
    this.year=c,
    this.color=d,
    this.drive=function(){console.log(`I drive ${this.model}`);}
}
const car1=new Car("Ford","Mustard",2024,"Red");
const car2=new Car("BMW","X9",2025,"White");
car2.drive();
car1.drive();
console.log(car1.color);

class Product
{
    constructor(name,price)
    {
        this.name=name;
        this.price=price;
    }
    display()
    {
        console.log(`name is ${this.name}`);
        console.log(`price is $${this.price}`);
    }
    calculate(salesT)
    {
        return this.price+this.price*salesT;
    }
}

const salesT=0.05;

const p1=new Product("Shirt",20);
const p2=new Product("Pant",19);
p1.display();
p2.display();
console.log(`tot is $${p2.calculate(salesT)}`);

class User
{
    static userCount=0;

    constructor(userName)
    {
        this.userName=userName;
        User.userCount++;
    }

    static users()
    {
        console.log(User.userCount);
    }
}
const user1=new User("Sinehan");
const user2=new User("Govind");
User.users();
console.log(user1.userName);
console.log(User.userCount);

class Animal
{
    alive=true;

    eat()
    {
        console.log(`This ${this.name} is eating`);
    }
}
class Rabbit extends Animal{
    name="rabbit";
}

const rabit=new Rabbit();
rabit.eat();

class Animal{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    move(speed)
    {
        console.log(`moves ${speed}`);
    }
}
class Rabbit extends Animal{
    constructor(name,age,runspeed)
    {
        super(name,age);
        this.runspeed=runspeed;
    }
    run()
    {
        super.move(this.runspeed);
    }
}
class Fish extends Animal{
    constructor(name,age,swimspeed)
    {
        super(name,age);
        this.swimspeed=swimspeed;
    }
}
const rab=new Rabbit("rabbit",1,45);
const fis=new Fish("fish",3,34);
rab.move(rab.runspeed);
console.log(rab.age);

class Rectangle{
    constructor(width,height)
    {
        this.width=width;
        this.height=height;
    }
    set width(newWidth)
    {
        if(newWidth>0)
        {
            this._width=newWidth;
        }
        else{
            console.error(`Width should be a positive integer`);
        }
    }
    set height(newHeight)
    {
        if(newHeight>0)
        {
            this._height=newHeight;
        }
        else{
            console.error(`height should be positive`);
        }
    }

    get width()
    {
        return this._width;
    }
    get height()
    {
        return this._height;
    }

}

const rec=new Rectangle(1100,23);
console.log(rec.width);
console.log(rec.height);

class Person{
    constructor(firstname,lastname,age)
    {
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }
    set firstname(newfirstname)
    {
        if(typeof newfirstname ==="string" && newfirstname.length>0)
        {
            this._firstname=newfirstname;
        }
        else{
            console.error(`should be non empty string`);
        }
    }
    set lastname(newlastname)
    {
        if(typeof newlastname ==="string" && newlastname.length>0)
        {
            this._lastname=newlastname;
        }
        else{
            console.error(`should be non empty string`);
        }
    }
    set age(newage)
    {
        if(newage>0)
        {
            this._age=newage;
        }
        else{
            console.error(`age should be a integer`);
        }
    }
    get firstname()
    {
        return this._firstname;
    }
    get lastname()
    {
        return this._lastname;
    }
    get age()
    {
        return this._age;
    }
    get fullname()
    {
        return this._firstname+" "+this._lastname;
    }
}

const p1=new Person("Sinehan","K",21);
console.log(p1.firstname);
console.log(p1.lastname);
console.log(p1.age);
console.log(p1.fullname);

let a=1;
let b=2;
[a,b]=[b,a];

const color=["red","blue","green","black"];
const [fc,sc,tc,...extra]=color;

const person1={
    firstname:"Sinehan",
    lastname:"K",
    age:21,
    job:"SDE",
}
function display({firstname,lastname,age,job,love="single"})
{
    console.log(firstname+" "+lastname+" "+`age is ${age} job is ${job} marital status is ${love}`);
}
display(person1);

const person=
{
    fullname:"Sinehan K",
    age:21,
    isStudent:false,
    hobbies:["karate","football","cricket"],
    address:{
        street:"103 inin nin",
        city:"Bikini",
        country:"USA",
    }
}
for(const property in person.address)
{
    console.log(person.address[property]);
}

class Person{
    constructor(name,age,...address)
    {
        this.name=name;
        this.age=age;
        this.address=new Address(...address);
    }
}

class Address{
    constructor(street,city,country)
    {
        this.street=street;
        this.city=city;
        this.country=country;
    }
}

const p1=new Person("Sinehan",21,"asasa","ffhfgh","kmknk");

const p2=new Person("Dwayne",55,"ne","col","new YOrk");

console.log(p2.address.country);
const fruits=[{name:"banana",color:"Yellow"},{name:"apple",color:"red"},{name:"orange",color:"orange"}];
console.log(fruits[1].name);

let numbers=[1,10,2,9,3,8,4,7,5,6];
numbers.sort((a,b)=>{ return a-b; });
console.log(numbers);

const person=[{name: "Sinehan",age:21,cgpa:8.5},{name: "Vignesh",age:15,cgpa:9.5},{name: "Naveen",age:24,cgpa:8.9}];
person.sort((a,b)=>(a.name.localeCompare(b.name)));
console.log(person);
const date=new Date();
console.log(date);
outer();
function outer()
{
    let mes="Hwllo";
    function inner()
    {
        console.log(mes);
    }
    inner();
}

function createCounter()
{
    let count=0;
    function increment()
    {
        count++;
        console.log(count);
    }
    return {increment};
}
const counter=createCounter();
counter.increment();
counter.increment();
counter.increment();

function game()
{
    let score=0;

    function increase(points)
    {
        score+=points;
        console.log(`+${points}pts`);
    }
    function decrease(points)
    {
        score-=points;
        console.log(`-${points}pts`);
    }
    function getScore()
    {
        return score;
    }

    return {increase,decrease,getScore};
}
const games=game();
games.increase(3);
games.decrease(9);
console.log(games.getScore());
console.log(games.score);

let timeoutid;
function say()
{
    timeoutid=setTimeout(()=>window.alert("Hello"),3000);
    console.log(`started`);
}
function stop()
{
    clearTimeout(timeoutid);
    console.log(`cleared`);
}

function updateClock()
{
    const now=new Date();
    const hours=now.getHours().toString().padStart(2,0);
    const minutes=now.getMinutes().toString().padStart(2,0);
    const seconds=now.getSeconds().toString().padStart(2,0);
    const time=`${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent=time;
}
updateClock();
setInterval(updateClock,1000);

const display=document.getElementById("display");
let timer=null;
let startTime=0;
let elapsedTime=0;
let isRunning=false;

function start()
{
    if(!isRunning)
    {
        startTime=Date.now()-elapsedTime;
        timer=setInterval(update,10);
        isRunning=true;
    }
    
}

function stop()
{
    if(isRunning)
    {
        clearInterval(timer);
        elapsedTime=Date.now()-startTime;
        isRunning=false;
    }
}

function reset()
{
    clearInterval(timer);
    startTime=0;
    elapsedTime=0;
    isRunning=false;
    display.textContent="00:00:00:00";
}

function update()
{
    const currentTime=Date.now();
    elapsedTime=currentTime-startTime;

    let hours=Math.floor(elapsedTime/(1000*60*60));
    let minutes=Math.floor(elapsedTime/(1000*60)%60);
    let seconds=Math.floor(elapsedTime/1000%60);
    let milliseconds=Math.floor(elapsedTime%1000/10);

    hours=String(hours).padStart(2,"0");
    minutes=String(minutes).padStart(2,"0");
    seconds=String(seconds).padStart(2,"0");
    milliseconds=String(milliseconds).padStart(2,"0");

    display.textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`;

}
import {PI,getArea} from './mathUtil.js';

console.log(PI);
console.log(getArea(10));

function func1(callback)
{
    setTimeout(()=>{console.log(`task1`);
                    callback()},3000);
}
function func2()
{
    console.log(`task2`);
}
func1(func2);

try{
    const dividend=window.prompt("Enter a dividend: ");
    const divisor=window.prompt("Enter a divisor: ");

    if(divisor == 0)
    {
        throw new Error("Should not be a zero");
    }

    console.log(dividend/divisor);
}
catch(error)
{
    console.error(error);
}

console.log(`You reached the end`);*/









/*calculator

const display=document.getElementById("display");

function appendToDisplay(input)
{
    display.value+=input;
}
function clearD()
{
    display.value="";
}
function calculate()
{
    try{
    display.value=eval(display.value);
    }
    catch(error)
    {

    }
}
*/

/*
const d=document.getElementsByClassName("fruits");

Array.from(d).forEach(fruit=>{ fruit.style.backgroundColor="red";})

const a=document.querySelectorAll(".fruits");

for(let f of a)
{
    f.style.backgroundColor="aqua";
}


const fruit=document.getElementById("vegetables");
fruit.previousElementSibling.style.backgroundColor="blue";

const newh1=document.createElement("h1");
newh1.textContent="I like pizza";
newh1.id="myh1";
newh1.style.color="tomato";
newh1.style.textAlign="center";
//document.getElementById("box1").prepend(newh1);
const box2=document.getElementById("box2");
document.body.insertBefore(newh1,box2);
document.body.removeChild(newh1);


const username="Sinehan";
const welcomemsg=document.getElementById("wel-msg");
welcomemsg.textContent+=username===""?" Guest":` ${username}`;

const ulElements=document.querySelectorAll("ul");
ulElements.forEach(ul =>{
    const fc=ul.lastElementChild;
    fc.style.backgroundColor="brown";
});

const newH1=document.createElement("h1");
newH1.textContent="Murugan";
newH1.style.color="tomato";
newH1.style.textAlign="center";
//document.body.prepend(newH1);
//document.getElementById("box2").prepend(newH1);
//const box2=document.getElementById("box2");
const boxes=document.querySelectorAll(".box");
document.body.insertBefore(newH1,boxes[2]);
document.body.removeChild(newH1);

const newItem=document.createElement("li");
newItem.textContent="Coconut";
newItem.style.backgroundColor="lightgreen";

const lis=document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newItem,lis[2]);*/

//const myBox=document.getElementById("myBox");
//const mybtn=document.getElementById("mybtn");

/*document.addEventListener("keydown",event=>
{
    myBox.style.backgroundColor="tomato";
    myBox.textContent="Tomato🍅";
});
document.addEventListener("keyup",event=>{
    myBox.style.backgroundColor="lightyellow";
    myBox.textContent="Get well soon";
});
//mybtn.addEventListener("mouseout",event=>{
  //  myBox.style.backgroundColor="lightgreen";
    //myBox.textContent="Click Me 😉";
//})

const moveAmount=10;
let x=0;
let y=0;

document.addEventListener("keydown",event=>
{
    if(event.key.startsWith("Arrow"))
    {
        event.preventDefault();
        switch(event.key)
        {
            case "ArrowUp":
                y-=moveAmount;
                break;
            case "ArrowDown":
                y+=moveAmount;
                break;
            case "ArrowLeft":
                x-=moveAmount;
                break;
            case "ArrowRight":
                x+=moveAmount;
                break;
        }
        myBox.style.top=`${y}px`;
        myBox.style.left=`${x}px`;
    }

});*/

