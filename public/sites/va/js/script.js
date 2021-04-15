const scrollValue = 250;

var backTop = document.getElementById("back-top");

window.onscroll = function() {
    if(document.body.scrollTop > scrollValue || document.documentElement.scrollTop > scrollValue ) {
        backTop.style.display = "inline-block";
    } else {
        backTop.style.display = "none";
    }
}