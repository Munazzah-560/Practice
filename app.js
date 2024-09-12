//Chapter 5

//Question 1

// var num = 3
// var num1 = 5
// document.write("Sum of 3 and 5 is ",  num + num1)

//Question 2

// var num = 3
// var num1 = 5
// document.write("Sum of 3 and 5 is ",  num - num1)

// var num = 3
// var num1 = 5
// document.write("Sum of 3 and 5 is ",  num * num1)

// var num = 3
// var num1 = 5
// document.write("Sum of 3 and 5 is ",  num % num1)

//Question 3
//a
//var name = 3
//b
//var num =
//document.write("Value after variable declaration is: " , num)
//c
// var initialize = 9
// document.write(initialize)
// d
// var  initial  = 5
// document.write("Initial value: ", initial)
//e
// var exp =++
// document.write(exp)
//f
// var a = 5
// var exp =++a
// document.write("Value after increment is: ", exp)
//g
// var exp = 7
//h
// var exp = 7
// var exp1 =6
// document.write("Value after addition is: ",+ exp + exp1)
//i
// var exp = --
// document.write(exp)
//j
// var a =13
// var exp = --a
// document.write("Value after decrement is:",exp)
//k
// var a =0
// var b =3
// document.write("The remainder is:" ,a/b)

//Question 4

// var a = 600
// var b = 5
// document.write("Total cost to buy ", b ," tickets to a movie is " , a*b ,"PKR")

//Question 5

// var a = 4
// document.write("Table of 4")
// document.write("<br>4*1=",a , "<br>4*2=",a*2,"<br>4*3=",4*3,"<br>4*4=",a*4,"<br>4*5=",a*5,"<br>4*6=",a*6,"<br>4*7=",a*7,"<br>4*8=",a*8,"<br>4*9=",a*9,"<br>4*10=",a*10 )

//Question 6

// var fahrenheit=77;
// var celcius =(fahrenheit-32)*5/9
// var C =77
// document.write(celcius,"°C is ", C , "°F")

//Question 7

// var title="<h1>Shopping Cart</h1>"
// var item = 650
// var item1 = 3
// var item2 = 100
// var item3 = 7
// var item4 = 100
// document.write(title,"<br><br>Price of item 1 is ",item,"<br>Quantity of item 1 is ",item1,"<br>Price of item 2 is ",item2,"<br>Quantity of item2 is ",item3,"<br>Shipping charges",item4,"<br><br>Total cost of your order is ",item*item1+item2*item3+item4)

//Question 8

// var title ="<h1>Marks sheet</h1>"
// var total =980
// var obtained =804
// document.write(title, "<br>Total marks: ",total,"<br>Marks obtained: ",obtained,"<br>Percentage: ",obtained/total*100,"%")

//Question 9

// var title ="<h1>Currency in PKR</h1>"
// var dollar =1048
// var riyal =700
// document.write(title,"<br><br>Total cureency in PKR: ", dollar + riyal)

//Question 10

// var num = 5
// var num1 = 5
// var num2 = 10
// var num3 = 2
// document.write(num+num1*num2/num3)

//Question 11

// var title ="<h1>Age Calender</h1>"
// var current =2024
// var birth =2004
// document.write(title,"Current Year: ",current,"<br>Birth Year: ",birth,"<br> Your age is: ",current-birth)

//Question 12

// var title ="<h1>The Geometrizer</h1>"
// var radius = 20
// var circumference =2*3.142*20
// var area = 3.142*20*20
// document.write(title,"<br>Radius of a circle: ",radius,"<br>The circumference is: ",circumference,"<br>The area is: ",area)

//Question 13

// var title = "<h1>The Lifetime Supply Calculator</h1>"
// var favourite ="Chocalato"
// var current = 18
// var maximium = 60
// var amount = 5
// document.write(title,"<br><br>Favourite Snack: ",favourite,"<br>Current Age: ",current,"<br>Estimated Maximium Age: ",maximium,"<br>Aout of snacks per day: ",amount,"<br>You will need 180 chocalato to last you until the ripe old age of 60")

//Chapter 6 to 9

//Question 1
// var a = 10
// document.write("Result:","<br>The value f a is: ", a ,"<br>...............................","<br><br>The value of ++a is: ",++a,"<br>Now the value of a is: ",a ,"<br>,<br>The value of a++ is: ", a++,"<br>Now the value of a is: ",a,"<br><br>The value of --a is: ",--a,"<br>Now the value of a is: ", a ,"<br><br>The value of a-- is: ",a--, "<br>Now the value of a is: ", a)

//Question 2

// var a = 2;
// var b = 1;
// document.write("a is ", a ,"<br> b is " , b ,"<br> --a is ", --a ,"<br>--a - --b is" , --a - --b ,"<br> --a - --b + ++b is: ", --a - --b + ++b,"<br>--a - --b + ++b + b-- is",--a - --b + ++b + b--)
// var a = 2;
// var b = 1;
// document.write("<br>Result: ",--a - --b + ++b + b--)

//Question 3

// var userName = prompt()
// console.log(userName)

//Question 4
//Question 5

// var num1 = Number (prompt("Enter your firstNumber"))
// var num2 =Number (prompt("Enter your lastNumber"))
// document.write(num1*num2)

//Question 6

// var title = "<b>Subject Total Marks Obtained Marks Persentages</b>"
// var subject1 =prompt("Subject 1")
// var subject2 =prompt("Subject 2")
// var subject3 =prompt("Subject 3")
// var total = 100
// var obtained =54
// document.write(title,"<br>",subject1,"&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp",total,"&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp",obtained,"&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp",obtained/total*100,"%","<br><br>",subject2,"&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp", total,"&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp", obtained,"&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp",obtained/total*100 ,"%","<br><br>",subject3,"&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp", total,"&nbsp &nbsp&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp",obtained-6,"&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp",obtained-6/total*100,"%","<br><br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp <b>",total+total+total,"</b>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp <b>",obtained+obtained+obtained-6,"</b>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ","<b>&nbsp &nbsp",156/300*100,"%</b>")

//Chapter 6 (Math Expression II)

//Question 1
// x=1
// var exp =x*+
// var exp =x++
// document.write(exp)

//Question 2

// var x = 100
// document.write(--x)

//Question 3

// var x = 50
// var y =x++
// document.write(y)

//Question 4

// var y = 50
// var z = --y
// document.write(z)

//Question 5
// num =2
// var newNum = --num
// document.write(newNum)

//Question 6

// value=3
// var exp =++value
// document.write(exp)

//Question 7

// number = 5
// var exp =number++
// alert("Value is " +exp)

//Chapter 7 (Math Expression III)

//Question 1

// var calculatedNum =2 + (2 * 6);
// document.write(calculatedNum)

// Question 2

// var calculatedNum = (2 + 2)*6
// document.write(calculatedNum)

// Question 3

// var calculatedNum = (2 + 2) * (4 + 2);
// document.write(calculatedNum)

// Question 4

// var calculatedNum = ((2 + 2) * 4) + 2;
// document.write(calculatedNum)

// Question 5

// var cost =(2+2)*(4+10);
// document.write(cost)

//Question 6

// var unit = 2+(2*4)+10;
// document.write(unit)

//question 7

// var pressure = 4/(2*4)
// document.write(pressure)

//Chapter 8 (Concatenating Text Strings)

//Question 1

// var num = "2" + "2"
// document.write(num)

//Question 2

// var message = ("Hello," + "Dolly");
// alert(message)

//Question 3

// alert("33"+ 3)

// Question 4

// var firstPart = "Pakistan";
// var lasrPart = "Zaindabad";
// alert(firstPart + lasrPart);

// Question 5

// var firstNumber = "Hello";
// var lastNumber = "60";
// document.write(firstNumber + lastNumber)

// Question 6

// var firstString =  "Hello";
// var lastString = "World";
// var concatenate = firstString + lastString

// Chapter 9 Prompts

// Question 1

// var name = prompt("Enter the first name")
// console.log(name)

// Question 2

// var country= prompt("Country", "China")

// Question 3

// var yourName = prompt("Enter your name")

// Question 4

// var user = prompt("message" , "Hello")

// Question 5

// var first = "How are You";
// var second = "I am fine";
// var response = prompt(first,second)

// Question 6

// var user = "Pizza"
// var Response =prompt("Your favourite food is ",user)
// alert(user)