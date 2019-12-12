$(document).ready(function() {
    $("#header").html('<a href="index.html"><div class="container"><img id="logo" src="img/moon.png" alt="logo"/></a><ul><li><a href="index.html">Home</a></li><li><a href="aboutus.html">About Us</a></li><li><a href="contactus.html">Contact Us</a></li><li><a href="giftcards.html">Gift Cards</a></li><li><a href="locations.html">Locations</a></li><li><a href="menu.html">Menu</a></li><li><a href="eventsbooking.html">Events/Booking</a></li><li><a href="careers.html">Careers</a></li><li><a href="sitemap.html">Site Map</a></li><li><a href="specials.html">Specials</a></li><li><a href="contests.html">Contests</a></li></ul></div>');
    $("#footer").html('<div id="astronautWrapper"><embed id="astronaut" src="img/astronaut.svg" /></div><div class="container"><div id="quick-links"><h3 class="footer-title">Copy Right</h3><ul><li>© Over The Moon</li><li>2019-2029 Humber College Team 4I1C</li></ul></div><div id="contact-me"><a href="contactus.html"><h3 class="footer-title">Contact Us</h3></a><ul><li><a href="#"> Over The Moon.</a></li><li><a href="#">Timothy.Tudis@gmail.com</a></li><li><a href="#">+1(437)341-1863</a></li></ul></div></div>');

    // animation of astronaut
    // origin margin-left
    var oml = 1600;
	// origin margin-top
    var omt = 0;
	// origin transform rotate
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
        // margin-top: 0~50 px
        var mt = Math.floor(Math.random() * 50);
        // transform rotate: -80~80 deg
        var tr = Math.floor(Math.random() * 160) - 80;
        oml -= ml;
        $("#astronaut").css("margin-left", oml + "px");
        $("#astronaut").css("margin-top", mt + "px");
        $("#astronaut").css("transform", "rotate(" + tr + "deg)");

    };
    // keep running moveAstronaut code
    setInterval(moveAstronaut, 2000);
})