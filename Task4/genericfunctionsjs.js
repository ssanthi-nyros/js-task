
// validating the form fields


function validateForm(event) 
{

    event.preventDefault();
    var nameValid = validateName();
    var orgValid = validateorg()
    var emailValid = validateEmail();
    var mobileValid = validateMobile();
    var radioValid = validateRadio();
    var checkValid = validateCheck();
    var cityValid  = validateCity();
    var countryValid = validateCountry();
    var singlecheckValid = validatesinglecheck();


    if (!nameValid || !orgValid || !emailValid || !mobileValid || !radioValid || !checkValid || !cityValid || !countryValid || !singlecheckValid) 
    {
        return;
    }


// programatically submit the form > event.target.submit();
    event.target.submit();
}


// firstname validation 

function validateName() 
{

    var name = document.forms["myForm"]["fname"].value;
    var lname = document.forms["myForm"]["lname"].value;
    var namecheck = /^[a-z A-Z.]{3,30}$/;

    if (name == null || name == "") {

        document.getElementById('firsterror').innerHTML = "please enter the firstname";
        return false;
    } 
    
    else if((name.length <= 2) || (name.length > 20)) 
    {
        document.getElementById('firsterror').innerHTML =" ** name  length must be between 2 and 20";
        return false;  
    }
    else if(!isNaN(name))
   {
       document.getElementById('firsterror').innerHTML =" ** only characters are allowed";
        return false;
    }
    else if(namecheck.test(name))
    {
        document.getElementById('firsterror').innerHTML = " ";
    }
    if (lname == null || lname == "") 
    {
                            
        document.getElementById('lasterror').innerHTML = "please enter the lastname";
        return false;
    }
   
    else if((lname.length <= 2) || (lname.length > 20)) {
        document.getElementById('lasterror').innerHTML =" ** name  length must be between 2 and 20";
        return false;  
    }
    else if(!isNaN(lname)){
        document.getElementById('lasterror').innerHTML =" ** only characters are allowed";
        return false;
    }
    else if(namecheck.test(lname))
    {
        document.getElementById('lasterror').innerHTML = '';
       return true;
    }
}






// organisation validation

function validateorg() 
{
    var organisation= document.forms["myForm"]["organ"].value;
    if (organisation == null || organisation == "") {
    document.getElementById('organerror').innerHTML = "please enter the name of the organization";
    return false;
    }
    document.getElementById('organerror').innerHTML = '';
    return true;
}

// email validation


function validateEmail() 
{
    var email = document.forms["myForm"]["email"].value;
    if (email == null || email == "") {
    document.getElementById('emailerror').innerHTML = "please enter the email";
    return false;
    }
    else if(email.indexOf('@') <= 0 ){
    document.getElementById('emailerror').innerHTML =" ** @ Invalid Position";
    return false;
    }
    else if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
    document.getElementById('emailerror').innerHTML =" ** . Invalid Position";
    return false;
    }
    document.getElementById('emailerror').innerHTML = '';
    return true;
}


// mobile number validation
                    

function validateMobile()
{
    var phone = document.forms["myForm"]["Mobileno"].value; 
    var regex = /[7-9]\d{9}/;
    if (phone == null || phone == "") {
    document.getElementById('mobileerror').innerHTML = "please enter the mobile number";
    return false;
    } 
    else if(!regex.test(phone))
    {
    document.getElementById('mobileerror').innerHTML = 'please enter valid phone number';
    return false;
    }
    document.getElementById('mobileerror').innerHTML = '';
    return true;
}


// validating radiobuttons


function validateRadio()
{

    var radiobuttons = document.getElementsByClassName( 'myRadios' );
    var isChecked = false;
    for (var i = 0; i < radiobuttons.length; i++) {
        if ( radiobuttons[i].checked ) {
            isChecked = true;
        };
    };
    if (isChecked ) {
        document.getElementById('radError').innerHTML =" ";
        return false;
   }
   else 
  {
      document.getElementById('radError').innerHTML ="please choose atleast one";  
      return true;
   }
  
   
}




// validating checkboxes


function validateCheck()
{

    
    var checkBoxes = document.getElementsByClassName( 'myCheckBox' );
    var isChecked = false;
    for (var i = 0; i < checkBoxes.length; i++) {
        if ( checkBoxes[i].checked ) {
            isChecked = true;
        };
    };
    if (isChecked ) {
        document.getElementById('checkError').innerHTML =" ";
        return false;
   }
   else 
  {
      document.getElementById('checkError').innerHTML ="please select atleast one";  
      return true;
   }
  
}

//city validation


function validateCity()
{
    var cityV = document.myForm.City.length;
    var isValid="";
    for(var i = 0;i<cityV;i++){

        if(document.myForm.City[i].selected){
            cityV = document.myForm.City[i].value;
            
            }
        }
    
    if(isValid == "")
    {
        document.getElementById('cityerror').innerHTML =" please select atleast one"
    }
    else
    {
    document.getElementById('cityerror').innerHTML ="  ";
    }
}

// country validation

function validateCountry()
{

    
    var Nation = document.myForm.country.length;
    var valid = "";
    for(var i = 0;i<Nation;i++){

    if(document.myForm.country[i].selected){
        Nation = document.myForm.country[i].value;
        
        }
    }

    if(valid== "")
    {
    document.getElementById('countryerror').innerHTML =" please choose atleast one";
    }
    else
    {
    document.getElementById('countryerror').innerHTML ="  "
    }
   
}



 //single checkbox field validation

function validatesinglecheck()
{
   
    var singlecheck = document.getElementById('singlecheck').checked
    if(singlecheck == false )
    {
        document.getElementById('singlecheckerror').innerHTML =" this is required field";
        return false;
    }
    else
    {
        document.getElementById('singlecheckerror').innerHTML = " ";
    }
        

  
 }

 
