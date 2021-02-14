function dropdownValue(element){
    val = element.getAttribute('data-value');
    document.getElementById("content-form-button").innerHTML = element.innerHTML;
    document.getElementById("content-form-button").style.color = "black";
    document.getElementById("content-form-button").value = val;
}

function validation(){
    var number = document.getElementById("number").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var description = document.getElementById("content-form-button").value;
    if (number.length != 10 || !name.includes(" ") || !email.includes("@") || description == ""){
        return false;
    }
    else{
        return true;
    }
}

function realTimeValidation(id){
    var element = document.getElementById(id);
    if(element.value.length == 0){
        element.style.border = "1px solid #ced4da";
        element.nextElementSibling.style.color = "#c9c9c9";
        element.nextElementSibling.nextElementSibling.innerHTML = "";
        return
    }
    if (id == "number" && element.value.length > 0 && element.value.length < 10){
        element.style.border = "1px solid red";
        element.nextElementSibling.style.color = "red";
        element.nextElementSibling.nextElementSibling.innerHTML = "Please enter a valid mobile number";
    }
    else if (id == "name" && !element.value.includes(" ")){
        element.style.border = "1px solid red";
        element.nextElementSibling.style.color = "red";
        element.nextElementSibling.nextElementSibling.innerHTML = "Please enter a valid name";
    }
    else if (id == "email" && !element.value.includes("@")){
        element.style.border = "1px solid red";
        element.nextElementSibling.style.color = "red";
        element.nextElementSibling.nextElementSibling.innerHTML = "Please enter a valid e-mail id";
    }
    else{
        element.style.border = "1px solid #ced4da";
        element.nextElementSibling.style.color = "#c9c9c9";
        element.nextElementSibling.nextElementSibling.innerHTML = "";
    }
}