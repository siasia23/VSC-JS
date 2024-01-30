$(function(){
    $("#box1").fadeOut(3000, function(){    // 3000 = 3 seconds
        $("#box1").fadeIn(3000, function(){
            alert("fadeIn!!!!!!!!!!!!!");
        });
    });
    
    $("#box2").addClass("box2");
    $("#box2").css("position", "absolute");
    $("#box2").animate({
        width: "400px",
        height: "400px",
        backgroundColor: "#ccc",
        left: "600px",
        top: "600px"
    }, 3000, function() {
        alert("animation stopped!!!!!!");
    });
});