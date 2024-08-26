console.log(x); //undefined

var x=10; //number
console.log(x);
console.log(typeof x);

x = "Hello"; //string
console.log(x);
console.log(typeof x);

x = false; //boolean
console.log(x);
console.log(typeof x);

x = null;  //null
console.log(x);
console.log(typeof x);


console.log(8||0);
console.log(8||9);
console.log(8&&9&&0);
console.log(8&&9);
console.log(!8);
console.log(!!8);
console.log(!(!8));

var firstname="jeon  "; 
var lastname="asjk", fullname=firstname + lastname; //comman operator
console.log(fullname);

var response =prompt("please enter your name :)","asjk");
if(response)
{
    document.write("Welcome " +response+" :) ");
}
else
{
    alert("you haven't enter any name yet");
}

alert("i'll ask you about your favorite color");

var FavColor=prompt("select your fav color","1) white , 2) red , 3)purple , 4) black")
var color;
var flag =1;
switch(FavColor)
{
    case "1":
    case "white":
            color="white";
            break;   

    case "2":
    case "red":
            color="red";
            break;  

    case "3":
    case "purple":
            color="purple";
            break;  
    case "4":
    case "black":
            color="black";
            break; 
    default:
        flag=0;
        alert("i can't understande your choise");   
        break;             
}

if(flag)
{
    document.write("your favorite color is "+ color+"  ^^~ <br> <hr> ")    
}

for (var i=2;i<21;i+=2)
{
    document.write("i love you jungkook <br>");
}

document.write("<hr>")
i=2;
while(i<21)
{
    document.write("i love you hyunjin <br>");
    i+=2;
}

do
{
    var res=prompt("what is your name?");
}while(!res)

var action =confirm("do you want to continue ?!");
