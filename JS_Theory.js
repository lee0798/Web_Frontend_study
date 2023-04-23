//print
console.log()
//variable: const let var
const a=5;
const b=2;
const MyName="dohwan";
console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("hello "+MyName);
let MyName="dohwan";
console.log("hello "+MyName);
MyName="dohwanee"; 
console.log("hello "+MyName);
//boolean true false null 
const amIFat = true;
const amIFat1 = null;
let amIFat2 ;//undefined
console.log(amIFat);
//array
const daysOfWeek=["mon","tue","wed","thu","fri","sat"];
//get item from array
console.log(daysOfWeek[5]);
//add one more day to the array
daysOfWeek.push("sun");
//Objects
const player ={
    name:"nico",
    points:10,
    handsome:false,
    fat:"little fat"
};
console.log(player);
console.log(player.name);
console.log(player["name"]);
player.fat=true;//player가 const여도 object는 변경 가능
player.lastName="Dohwan";//새로운 object 항목 추가
//function
function sayHello(nameOfPerson, age){
    console.log("Hello "+nameOfPerson+  " "+age);
}
sayHello("nico",10);
//function in object
const player ={
    name:"nico",
    sayHello:function(otherPerson){
        console.log("hela" + otherPerson+" nice to meet you")
    }
};
console.log(player.name);
player.sayHello("lynn");
//use return in function
const age = 96;
function calculateKrAge(ageofForeigner){
    return ageofForeigner +2;
}
const krAge =calculateKrAge(age);
console.log(krAge);