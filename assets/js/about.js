var blink = document.getElementById('thank');
setInterval(function () {
    blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
}, 500);


$("#footer").load("_footer.html");


$("#header").load("_header.html");
