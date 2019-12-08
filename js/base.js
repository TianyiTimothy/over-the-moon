window.onload = function() {
    $("#header").html('<a href="index.html"><div class="container"><img id="logo" src="img/moon.png" alt="logo"/></a><ul><li><a href="index.html">Home</a></li><li><a href="aboutus.html">About Us</a></li><li><a href="contactus.html">Contact Us</a></li><li><a href="giftcards.html">Gift Cards</a></li><li><a href="locations.html">Locations</a></li><li><a href="menu.html">Menu</a></li><li><a href="eventsbooking.html">Events/Booking</a></li><li><a href="careers.html">Careers</a></li><li><a href="sitemap.html">Site Map</a></li><li><a href="specials.html">Specials</a></li><li><a href="contests.html">Contests</a></li></ul></div>');
    $("#footer").html('<embed id="astronaut" src="img/astronaut.svg" />');




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