function validateForm() {
var dd = parseInt(document.getElementById("birthDay").value);
var mm = parseInt(document.getElementById("birthMonth").value);
var yy = parseInt(document.getElementById("birthYear").value);
if ((dd <=0) || (dd >31)){
    alert("Enter the correct date");
}
else if ((mm <=0) || (mm >12)){
    alert("Enter the correct month");
}
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

