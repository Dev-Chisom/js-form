const validation = () =>{
    const user = document.querySelector('#user').value;
    const users = document.querySelector('#users').value;
    const pass = document.querySelector('#pass').value;
    const conpass = document.querySelector('#conpass').value;
    const mobileNumber = document.querySelector('#mobileNumber').value;
    const email = document.querySelector('#email').value;
    // const checkbox = document.querySelector('.checked');
    


    if(user === ""){
        // alert ('please fill')
     document.querySelector('#usernames').innerHTML = "**Please enter your name";
        return false;
    }
    if((user.length <= 3) || (user.length > 20)){
        document.querySelector('#usernames').innerHTML = "**Please enter a name between 2 and 20";
        return false;  
    }
    if(!isNaN(user)){
        document.querySelector('#usernames').innerHTML = "**Please enter a correct name";
        return false;
    }

    if(users === ""){
        // alert ('please fill')
     document.querySelector('#userNames').innerHTML = "**Please enter your name";
        return false;
    }
    if((users.length <= 3) || (user.length > 20)){
        document.querySelector('#userNames').innerHTML = "**Please enter a name between 2 and 20";
        return false;  
    }
    if(!isNaN(users)){
        document.querySelector('#userNames').innerHTML = "**Please enter a correct name";
        return false;
    }


    if((pass.length <= 8) || (pass.length > 20)){
        document.querySelector('#passwords').innerHTML = "**Please enter a length between 8 and 20";
        return false;  
    }
    if(pass === ""){
        document.querySelector('#confirmpass').innerHTML = "Please enter your password";
        return false;
    }
    if(pass !== conpass){
        document.querySelector('#passwords').innerHTML = "Password are not match";
        return false;  
    }
    if(conpass === ""){
        document.querySelector('#confirmpass').innerHTML = "Please confirm your password";
        return false;
    }



   
    if(mobileNumber == ""){
        document.querySelector('#mobileNumbers').innerHTML = "Please enter your mobile number";
        return false;
    }
    if(isNaN(mobileNumber)){
        document.querySelector('#mobileNumbers').innerHTML = "Please enter digits only";
        return false;
    }
    if(mobileNumber.length <= 10){
        document.querySelector('#mobileNumbers').innerHTML = "Please enter the correct digits only";
        return false;
    }

    if(email == "") {
        document.querySelector('#emails').innerHTML = "Please enter your email";
        return false;
    }
    if(email.indexOf('@')<= 0){
        document.querySelector('#emails').innerHTML = "@ Invalid Position";
        return false;
    }
    if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
        document.querySelector('#emails').innerHTML = ". Invalid Position";
        return false;
    }
}

