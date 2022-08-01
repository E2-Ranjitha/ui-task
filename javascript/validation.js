function validation_name(){
    var username=document.getElementById('name').value;
    if(username.length==0){
        document.getElementById('textError').innerHTML="*Username is required";
    }
    else{
        document.getElementById('textError').innerHTML="";
    }
}

function validation_password(){
    var password=document.getElementById('password').value;
    if(password.length==0){
        document.getElementById('passwordError').innerHTML="*Password is required";
    }
    else{
        document.getElementById('passwordError').innerHTML="";
    }
}