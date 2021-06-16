//Access Form via Element ID


var checkNullField = () => { 
    let fullName = document.getElementById('fullname');
    let phoneNumberOne = document.getElementById('phone-number-1');
    let kinName = document.getElementById('kinname');
    let phoneNumberTwo = document.getElementById('phone-number-2');
    let district = document.getElementById('district');
    let occupation = document.getElementById('occupation');
    let _height = document.getElementById('height');
    let _weight = document.getElementById('weight');
    let birthDate = document.getElementById('birth-date');
    let weightclass = document.getElementById('weight-class');
    
    let nullField = document.querySelector('.null-field')

    if(fullName.value == ""){
        fullName.style.border = "2px solid red";
        fullName.focus()
    } 
    if  (phoneNumberOne.value == ""){
        phoneNumberOne.style.border = "2px solid red";
        phoneNumberOne.focus()
    }
    if(kinName.value == "") {
        kinName.style.border = "2px solid red";
        kinName.focus()
    }
     if(phoneNumberTwo.value == ""){
        phoneNumberTwo.style.border = "2px solid red";
        phoneNumberTwo.focus()
    }
    if(district.value == ""){
        district.style.border = "2px solid red";
        district.focus()
    } 
    if(occupation.value == "") {
        occupation.style.border = "2px solid red";
        occupation.focus()
    }
    if(height.value == ""){
        height.style.border = "2px solid red";
        height.focus()
    }
     if(weight.value == ""){
        weight.style.border = "2px solid red";
        weight.focus()
    }
    if(weightclass.value == ""){
        weightclass.style.border = "2px solid red";
        weightclass.focus()
    }
    if(birthDate.value == ""){
        birthDate.style.border = "2px solid red";
        birthDate.focus()
       
       
         nullField.textContent = "fill in the missing field(s)";
        nullField.style = "font-size:18px; color:red;"
    }

    
}