
window.location.hash='/index.html'
window.addEventListener('hashchange', function (event) {
    let iframe = document.createElement('iframe')
    iframe.src = location.hash.replace('#/', '')
    document.body.append(iframe)
    iframe.style.display = 'none'
    iframe.onload = function () {
        let main = document.getElementById('main')
        main.innerHTML = ''
        main.append(iframe.contentDocument.getElementById('main'))
        document.body.removeChild(iframe)
    }
})
window.onload = function () {
    // $("#header").html('<a href="index.html"><div class="container"><img id="logo" src="img/moon.png" alt="logo"/></a><ul><li><a href="index.html">Home</a></li><li><a href="#">Menu</a></li><li><a href="sitemap.html">Site Map</a></li><li><a href="aboutus.html">About Us</a></li></ul></div>');
    // $("#footer").html('<embed id="astronaut" src="img/astronaut.svg" />');
    // footer part

    // animation of astronaut
    // origin margin-left
    var oml = 2000;
    var omt = 0;
    var otr = 0;

    function moveAstronaut() {
        // recover to the first place
        if (oml < 0) {
            oml = 2000;
            $("#astronaut").hide();
            $("#astronaut").css("margin-left", oml + "px");
            $("#astronaut").css("margin-top", omt + "px");
            $("#astronaut").css("transform", "rotate(" + otr + "deg)");
            return;
        }
        $("#astronaut").show();
        // margin-left: 100~200 px
        var ml = Math.floor(Math.random() * 100) + 100;
        // margin-top: 0~100 px
        var mt = Math.floor(Math.random() * 100);
        // transform rotate: -80~80 deg
        var tr = Math.floor(Math.random() * 160) - 80;
        oml -= ml;
        $("#astronaut").css("margin-left", oml + "px");
        $("#astronaut").css("margin-top", mt + "px");
        $("#astronaut").css("transform", "rotate(" + tr + "deg)");

    };
    // keep running moveAstronaut code
    setInterval(moveAstronaut, 2000);
}