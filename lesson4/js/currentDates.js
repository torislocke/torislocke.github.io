// JavaScript to maintain the current year information of copyright in footer
let currentYear = new Date();
document.getElementById('currentYear').innerHTML = currentYear.getFullYear();

//footer script to display current date without time
let options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
let today = new Date();
document.getElementById('currentDate').innerHTML = today.toLocaleDateString('en-US', options);

// end footer script to display current date and time
