function validateForm() {
var dd = (document.getElementById("birthDay"));
var mm = (document.getElementById("birthMonth"));
var yy = (document.getElementById("birthYear"));
var gender = document.getElementById("gender");
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

var i=""
if(targetday==0){
    i=7
}
else{

    (i=targetday-1)
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua","Yaa", "Afua", "Ama"];
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    if (gender.value === "Male"){
    alert("Your Akan name is  "+ maleNames[i]);
}
else if (gender.value === "Female"){
    alert("Your Akan name is  "+ femaleNames[i]);


}
}
}
