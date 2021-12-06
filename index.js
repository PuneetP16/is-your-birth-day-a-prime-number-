var readlineSync = require("readline-sync");
var chalk = require('chalk');

// rules 
var months = 12;
var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
is_Leap = false;
if (is_Leap) {
  daysInMonth[1] = 29
}

var userName = readlineSync.question(chalk.bgCyan("What's your name?") + "\n>")

function is_prime(number) {
  var is_no_prime = true;
  for (i=2;i<(number + 1);i++) {
    if (number % i === 0) {
      is_no_prime = false
    }
  }
  if (is_no_prime) {
    console.log(">>" + chalk.bgGreen(userName + ", Your birthday is a prime number."))
  }
  else {
    console.log(">>" + chalk.bgRed(userName + ", Your birthday is not a prime number."))
  }
}

for(i=0;i<50;i++) //validating day and month or looping back the question.
{
  var dateList = (readlineSync.question("\n" + chalk.bgMagenta("What's your Birth date? (Type in format: DD/MM)") + "\n>" )).split("/");
  console.log(dateList)
  var day = Number(dateList[0]);
  var month = Number(dateList[1]);  
  console.log(Number.isInteger(day))
  console.log(Number.isInteger(month))

if (day != 0 && Number.isInteger(day) && Number.isInteger(month) && month <= months && day <= daysInMonth[month - 1]) 
{
  break;
}
else
{
   console.log(chalk.bgRed("ERROR! Date is Invalid"))
}
}
is_prime(day)


