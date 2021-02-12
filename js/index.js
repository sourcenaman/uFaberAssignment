function dropdownValue(element){
    val = element.getAttribute('data-value');
    document.getElementById("content-form-button").innerHTML = element.innerHTML;
    document.getElementById("content-form-button").style.color = "black";
    document.getElementById("content-form-button").value = val;
}