//for loop

for( let i = 0 ; i<6 ; i++){
    console.log(i)
}

//program to add first n natural nums
let sum = 0
let n = prompt("Enter the value of n: ")
n = Number.parseInt(n)
for( let i = 0 ; i<6 ; i++){  //nums 1-6
    sum += i  //will add nums till n
} 
console.log("Sum of first " + n + " natural numbers is " + sum)

//program to print a table
n = prompt("Enter number to print table")
for(let i = 1 ; i<=10 ; i++){
    console.log(n + " * " + i  + " = " + n*i)
}
