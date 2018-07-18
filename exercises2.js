// 1. Madlib
function madLibs(name, subject) {
    var mad = name + "'s favorite subject in school is " + subject + ".";
    return mad;
}
var name = "mel";
var subject = "math";
console.log(madLibs(name, subject));

// 2. Tip Calculator
function tipAmount (cost, service) {
    if(service == 'good'){
        return cost * 0.20
    }
    else if(service == 'fair') {
        return cost * 0.15
    }  
    else if(service == 'bad'){
        return cost * 0.10
    }
    else{
        return "No tip"
    }
}
var cost = 100
var service = 'fair'
console.log(tipAmount (cost, service))

// 3. Tip Calculator 2
function tipAmount (cost, service) {
    if(service == 'good'){
        bill = cost * 0.20
        return cost + bill
    }
    else if(service == 'fair') {
        bill = cost * 0.15
        return cost + bill
    }  
    else if(service == 'bad'){
        bill = cost * 0.10
        return cost + bill
    }
    else{
        return "No tip"
    }
}
var tip = 0
var cost = 100
var service = 'fair'
console.log(tipAmount (cost, service))

// 4. Print Numbers 
var numbers = 1;

while(numbers <= 10){
    console.log(numbers);
    numbers = numbers + 1;
}

// 5. Print a Square
var square = function(numb) {
    for (var i = 1; i <= numb; i ++) {
      console.log("*".repeat(numb));
    }
  }
square(5);

// 6. Print a box
function printBox(width, height) {
    var top = "*".repeat(width);
    var middle = "*" + " ".repeat(width - 2) + "*\n";
    var middle1 = middle.repeat(height - 2);
    var completeBox = top + '\n' + middle1 + top;
  
    console.log(completeBox);
  }
  
  printBox(6, 4);

// 7. Print a banner 
function printBanner (width, bottom){
    var top = "*".repeat(width);
    var middle = "*" + " Welcome to DigitalCrafts " + "*\n";
    var completeBan = top + "\n" + middle + top;

    console.log(completeBan)
}

printBanner(28, 28)

// 8. Leetspeak
var alphabet = {
    A: "4",
    E: "3",
    G: "6",
    I: "1",
    L: "L",
    O: "0",
    S: "5",
    T: "7",
}
function leetspeak(str) {
    var arr = str.toUpperCase().split('');
    for (var i in arr){
        arr[i] = alphabet[arr[i]];
    }
    return arr.join('');
}
console.log(leetspeak('Leet'));

// 9. Long-long Vowels
function longVow(str){
    // var vowels = ["a", "e", "i", "o", "u"]
    var res = str.replace("a", "aaaaa").replace('e',"eeeeee").replace("i", "iiiii").replace("o", "ooooo").replace("u", "uuuuu");

    // let res5 = str.split('a').join('aaaaa').split('e').join('eeeeee')
    
    console.log(res);
}
let longVowName = "Melissa"
longVow('Melissa')

// 10. Just the positives
function positiveNumbers(nums) {
    // var nums = [-1, -2, -3, 0, 1, 2, 3];
    var positiveNumberArray = []
    for (var i=0; i<nums.length; i++) {
        if(nums[i] > 0) {
            positiveNumberArray.push(nums[i])
        }
        
    }
    return positiveNumberArray
}
var nums = [-1, -2, -3, 0, 1, 2, 3];

console.log(positiveNumbers(nums));