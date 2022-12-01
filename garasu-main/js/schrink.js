window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("img-logo").style.width = "50px";

    }

    else {
        document.getElementById("img-logo").style.width = "70px";
    }
}