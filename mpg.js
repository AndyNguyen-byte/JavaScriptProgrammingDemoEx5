/* 
Author: Andy Nguyen
Date: January 28,2021
Topic:Demo Exercise 5
Description: MPG Exercise
*/

let again = "y";
let miles = 0.0;
let gallons = 0.0;
let mpg = 0.0;
let calculationMsg;

do {
  miles = prompt("Enter the number of miles travelled:");
  miles = parseFloat(miles);
  gallons = prompt("Enter the number of galllons travelled:");
  gallons = parseFloat(gallons);

  if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
    //data id valid, do task
    mpg = miles / gallons;
    mpg = mpg.toFixed(2);
    calculationMsg = `<p>MPG:Miles travelled:<strong>${miles}</strong> miles - Gallons comsumed:
    <strong>${gallons}gallons</strong> - Consumption rate : <strong>${mpg}</strong></p>`;
  } else {
    //display invalid message
    calculationMsg = `<p style="color:red;">One or more invalid inputs.</p>`;
  }

  again = prompt("All set? Print to HTML page?", "y");
} while (again != "y");
