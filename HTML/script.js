

//string reversal
function reverseString(str) {
    const strRev= str.split('').reverse().join('');
    console.log(strRev);
}
console.log(reverseString("Gomycode"));
console.log(reverseString("Hello World"));
console.log(reverseString("Zayd"));

//string Length
const stringLength= "Hello user"
    console.log(stringLength.length)

//Changing characters to uppercase
const mySentence = "GoMyCode is an awesome learning space";

const finalSentence = mySentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
console.log(finalSentence)


//Minimum and Maximum number from an array
const digits=["john" ,"Adam", "Bailey","Craig" , "Zayd", ]
 digits.sort((a,b) => a.localeCompare(b))
 
 console.log(digits)

//sum of an array
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length;  i++){
        sum +=arr[i];
    }
    return sum
}
 const returnArray =[1,2,3,4,5,6]
 console.log(sumArray(returnArray));

//filter through Arrays

const players = [
    {
           name: "Messi",
           age: 36,
           club: "Inter Miami",
           country: "Argentina",
           goals: 832
       },
       {
           name: "Ronaldo",
           age: 38,
           club: "AL Nasir",
           country: "Portugal",
           goals: 872
       },
       {
           name: "Mbappe",
           age: 25,
           club: "Real Madrid",
           country:"France",
           goals: 400
       },
       {
           name: "Salah",
           age: 29,
           club: "Liverpool",
           country: "Egypt",
           goals: 500
       },
       {
           name: "Lewandowski",
           age: 33,
           club:"Bayern Munich",
           country: "Poland",
           goals: 700
       },
   
   ]
  
   
   const playerNames = players.map(players=> players.name)
   console.log(playerNames)
    
   const topPlayers = players.filter(players=> players.age >30).map(player=> player.name)
   console.log(topPlayers)
   const goalsList = players.filter(players=> players.goals >=500).map(player=> player.name)
   console.log(goalsList)
   const playerAge = players.filter(players=> players.age >=5).map(player=> player.age)
   console.log(playerAge)

 //Num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
 let m = 5; 

function factorial(m) { 
    let ans = 1; 
    
    if(m === 0)
        return 1;
    for (let i = 2; i <= m; i++) 
        ans = ans * i; 
    return ans; 
}
console.log(factorial(m));


//prime number function
function isPrime(number) {
    if ((number % 2 === 0 && number !== 2) || number <= 1) {
        return false;
    }
    const limit = Math.floor(Math.sqrt(number));
    for (let index = 3; index <= limit; index += 2) {
        if (number % index === 0) {
            return false;
        }
    }
    return true;
}
 console.log(isPrime(2))
 
//Fibonnaci sequence
function fibonacci(n) {
    if (n === 1) return 0;
    if (n === 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const n = 10;
let series = new Array(n).fill(0);

for (let i = 1; i <= n; i++) {
    series[i - 1] = fibonacci(i);
}

console.log(series);


 
 phones= ("I just got myelf a brand new phone")

phones.split("")
 console.log(phones.split('o'))