function validate(day, month) {
    if (day < 1 || day > 31 || month == 2 && day > 29) {
        alert("Enter the correct date");
        day.focus();
        return false;
    } else if (month < 1 || month > 12) {
        alert("Enter the correct Month");
        month.focus();
        return false;
    } else {
        return true;
    }
}
function validateForm() {
var birthDay = parseInt(document.getElementById("birthDay").value);
var birthMonth = parseInt(document.getElementById("birthMonth").value);
var birthYear = parseInt(document.getElementById("birthYear").value);
var gender = document.querySelector('input[name="Gender"]:checked').value;

let CC = yy.value.slice(0,2)
let YY = yy.value.slice(2,4)
let MM = mm.value
let DD = dd.value 
var targetday = Math.floor(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7)
alert(targetday)
var i=""
if(targetday==0){
    i=7
}
else{
    i=targetday-1
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua","Yaa", "Afua", "Ama"];
    var maleNames = ["Kwasi", "Kwadwo", "Kwaku", "Yaw", "Kofi", "Kwame"];
    alert("Your Akan name is  "+ femaleNames[i]);    
}
}

