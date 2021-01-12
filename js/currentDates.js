// JavaScript to place last update information in the footer
document.getElementById('updated').innerHTML = document.lastModified;

// JavaScript to maintain the current year information of copyright in footer
var currentYear = new Date();
document.getElementById('currentYear').innerHTML = currentYear.getFullYear();
