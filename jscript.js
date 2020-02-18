function authenticateUser()
{
    var uname=document.getElementById('userName');
    var pas=document.getElementById('password')
    document.getElementById('usernError').innerHTML='';
    document.getElementById('passError').innerHTML='';
        if(uname.value=="")
        {   
            document.getElementById('usernError').innerHTML='cant be empty';
        }
        if(uname.value!="" && uname.value!='admin')
        {
            document.getElementById('usernError').innerHTML='Wrong user name';
        }
        if(pas.value=="")
        {   
            document.getElementById('passError').innerHTML='cant be empty';
        }
        if(pas.value!="" && pas.value!='admin')
        {   
            document.getElementById('passError').innerHTML='Wrong password';
        }
        
       if(uname.value=="admin" && pas.value=="admin") {
           window.location="listing.html";
       }
}

