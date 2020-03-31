const body = document.body;
function dToggle() {
  body.classList.toggle("darkmode");
}

var deferredPrompt;

window.addEventListener("beforeinstallprompt", function(e) {
// Prevent Chrome 67 and earlier from automatically showing the prompt
e.preventDefault();
// Stash the event so it can be triggered later.
deferredPrompt = e;

showAddToHomeScreen();
});

function showAddToHomeScreen() {
var a2hsBtn = document.querySelector(".ad2hs-prompt");

a2hsBtn.style.display = "block";

document.getElementById("add").addEventListener("click", addToHomeScreen);
}
function addToHomeScreen() {
var a2hsBtn = document.querySelector(".ad2hs-prompt"); // hide our user interface that shows our A2HS button
a2hsBtn.style.display = "none"; // Show the prompt
deferredPrompt.prompt(); // Wait for the user to respond to the prompt
deferredPrompt.userChoice.then(function(choiceResult) {
  if (choiceResult.outcome === "accepted") {
    console.log("User accepted the A2HS prompt");
  } else {
    a2hsBtn.style.display = "none"; // Show the prompt

    console.log("User dismissed the A2HS prompt");
  }

  deferredPrompt = null;
});
}

function Cancel() {
document.querySelector(".ad2hs-prompt").style.display = "none";
}

window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
if (window.pageYOffset >= sticky) {
  navbar.classList.add("sticky")
} else {
  navbar.classList.remove("sticky");
}
}