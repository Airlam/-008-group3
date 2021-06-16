//Access Form via Element ID

var checkNullField = () => { 
    let fullName = document.getElementById('fullname');
    let dropDown = document.getElementById('dropdown');
    let date = document.getElementById('date');
    let phoneNumber = document.getElementById('phone-number');
    let residence = document.getElementById('residence');
    let NIN = document.getElementById('NIN');
    let temperature = document.getElementById('temperature');
    let email = document.getElementById('email');
    
    let nullField = document.querySelector('.null-field')

    if(fullName.value == "" || fullName.value.length < 8){
        fullName.style.border = "2px solid red";
        fullName.focus()
        return false;
    }else{
        fullName.style.border = "2px solid green";
    }
    
    if  (dropDown.value == "select your Gender"){
        dropDown.style.border = "2px solid red";
        dropDown.focus()
        return false;
    }else{
        dropDown.style.border = "2px solid green";
    }

    if(date.value == "") {
        date.style.border = "2px solid red";
        date.focus()
        return false;
    }

     if(phoneNumber.value == "" || isNaN(phoneNumber.value) || phoneNumber.value.length != 10){
        alert("Please input your phone number  in the format 07########")
        phoneNumber.focus()
        return false;
    }

    if(residence.value == ""){
        residence.style.border = "2px solid red";
        residence.focus()
        return false;
    } 

    if(NIN.value == "" || NIN.value.length != 14) {
        alert("Please input your correct NIN(14 characters)")
        NIN.focus()
        return false;
    }

    if(temperature.value == "" || c_sign < 1){
        var c_sign = temperature.value.indexOf("C")
        alert("Please input your tempreture in the right format. ##C");
        //temperature.textContent = "Please input your tempreture in the right format. ##C";
        //temperature.style = "font-size:18px; color:red;"
        temperature.focus()
        return false;
    }

    /*if(email.value == ""){
        email.style.border = "2px solid red";
        email.focus()
        return false;
    }*/
    
    /*if(birthDate.value == ""){
        birthDate.style.border = "2px solid red";
        birthDate.focus()
        
    }

    if(weightclass.value == ""){
        alert('Please make a selection');
        weightclass.focus()
        return false;
    }*/

    //nullField.textContent = "fill in the missing field(s)";
    //nullField.style = "font-size:18px; color:red;"

    return(true);
}

/*var checkTempField = () => {
    
}
const reg_form = document.getElementById('register-form');
reg_form.addEventListener('submit',checkNullField);
*/
