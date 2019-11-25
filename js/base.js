window.onload = function() {
    $("#header").html('<a href="index.html"><div class="container"><img id="logo" src="img/moon.png" alt="logo"/></a><ul><li><a href="index.html">Home</a></li><li><a href="#">Menu</a></li><li><a href="sitemap.html">Site Map</a></li><li><a href="aboutus.html">About Us</a></li></ul></div>');
    $("#footer").html('<embed id="astronaut" src="img/astronaut.svg" />');




    // footer part

    // animation of astronaut
    // origin margin-left
    var oml = 2000;
    var omt = 0;
    var otr = 0;

    function moveAstronaut() {
        console.log(1);
        if (oml < 0) {
            oml = 2000;
            $("#astronaut").hide();
            $("#astronaut").css("margin-left", oml + "px");
            $("#astronaut").css("margin-top", omt + "px");
            $("#astronaut").css("transform", "rotate(" + otr + "deg)");
            return;
        }
        $("#astronaut").show();
        // margin-left
        var ml = Math.floor(Math.random() * 100) + 100;
        var mt = Math.floor(Math.random() * 100);
        var tr = Math.floor(Math.random() * 160) - 80;
        oml -= ml;
        $("#astronaut").css("margin-left", oml + "px");
        $("#astronaut").css("margin-top", mt + "px");
        $("#astronaut").css("transform", "rotate(" + tr + "deg)");

    };
    setInterval(moveAstronaut, 2000);
}