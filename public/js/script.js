// ******************
// back to top button

const scrollValue = 1500;

// get the button
var backTop = document.getElementById("back-top");



// show button when the user scrolls down
window.onscroll = function() {
    if (document.body.scrollTop > scrollValue || document.documentElement.scrollTop > scrollValue) {
        backTop.style.display = "inline-block";
    } else {
        backTop.style.display = "none";
    }
}

// end back to top button
// ******************
