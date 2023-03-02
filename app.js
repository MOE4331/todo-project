var skip= confirm("do you wanat to skip the welcoming alert ?");

if (skip == false){

    alert("Welcome to my page !!");

    var userName = prompt("Please enter your name !");
    console.log(userName);
    var gender =prompt("what is your gender (Male/ Female)")
    
    var age = prompt("Enter your age ")
    if(age <=0 ){
        alert ("you age should not be less or equal than 0");
        prompt("enter your age again!")
    }else if(age >0 ){
        alert("your age is "+age);
    }
    //debugger
    if( gender == "male" || gender =="Male"){
        alert ("Welcome to my page  Mr " +userName );
    }else if (gender =="female" || gender =="female"){
        alert("Welcome to my page Ms " +userName)
    }else{
        alert("Welcome to my page " +userName)
    }
   }





