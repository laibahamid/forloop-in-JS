# continue-break-in-JS

document.write("<br>Break statement <br>")
//break statement
for(var a = 1; a<=10; a++){
    if(a == 5){

        document.write("Hello: " + a + "<br>")
        break; //breaks the output when it will find a = 5
}
    
    document.write("Number: " + a + "<br>")
}

document.write("<br>Continue statement <br>")
//continue statement
for(var a = 1; a<=10; a++){
    if(a == 5){

        document.write("Hello: " + a + "<br>")
        continue; //continues the output even it will find a = 5
}
    
    document.write("Number: " + a + "<br>")
}
