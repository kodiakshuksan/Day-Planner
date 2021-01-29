//Javascript
console.log("hello")
//Display Date
var today = luxon.DateTime.local();
var nowhour = today.c.hour
console.log(today.c.hour)
console.log(today)
var hour = today.c.hour;
console.log(hour)


var d = new Date();
console.log(d)
currentDay.innerHTML = d; 
console.log(currentDay)


// Display Hour - need to make this match up to current time somehow with Luxon
console.log(hour)
hour.innerHTML = hour;


function myFunction() {
    var x = document.createElement("TEXTAREA");
    var t = document.createTextNode("Enter Appointment Info:");
    x.appendChild(t);
    document.body.appendChild(x);
  }
 









// function makeEvent() {
//   var txt;
//   var person = prompt("Please enter event info:");
//   if (person == null || person == "") {
//     txt = "User cancelled the prompt.";
//   } else {
//     txt = person;
//   }
//   document.getElementById("appt").innerHTML = txt;
// };





// var make = document.getElementById("button");
// var event = document.getElementById("userEvent");
// var appt = document.getElementBy  




//click on hour block button
//alert to form input reads info on how to save appointment in time block
//user clicks save or submit button and hour block is updated with users new info
// function makeEvent() {
//   var event = document.getElementsByClassName("textarea");
//   console.log(event)
//   event.push("text area");
//   document.getElementById("usersEvent").innerHTML = event;
// };
 
// makeEvent()

// button brings up text area for user to make and save event
//iterate over hour block array adding this to each value
//document.getElementById("saveBtn i:hover").addEventListener("click", makeEvent());


//attach all buttons to makeEvent() maybe it does this already?
//
//function eventButtons() = {
//var nowhourblock = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17"];
//for (i=o; i < 10, i++);
//makeEvent()
//};


//changes color of hourblocks based on current time. 

//function colorcode() = {

// var nowhourblock = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17"]; miitary time
// var currentluxhour = luxon.DateTime.local();

// var past = if nowhourblock < currentluxhour 
//then 
//setAttribute("past");

// var present = if currentluxhour === nowhourblock
//then
//setAttribute("present");


// var future = if nowhourblock > currentluxhour
//then
//setAttribute("future");
//};

    
