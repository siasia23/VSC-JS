$(function(){

    $("#load").on("click", function() {
        $("#result").load(" ", function(
            responseText, textStatus, jqXHR
        ) {
            console.log(responseText);
            console.log(textStatus);
            console.log(jqXHR.readyState);
            // for (prop in jqXHR) {
            //     console.log(`${prop} : ${jqXHR[prop]}`);
            // }
        });
    });

    $("#get").on("click", function() {

    });

    $("#post").on("click", function() {

    });

});