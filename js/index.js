console.log('index.js file is loaded!');
/*hover text on top nav*/
$(".headerText1").mouseover(function(){
    $(".headerText1").css("color", "#ffe2a9");
});
$(".headerText1").mouseout(function(){
    $(".headerText1").css("color", "white");
});

$(".headerText2").mouseover(function(){
    $(".headerText2").css("color", "#ffe2a9");
});
$(".headerText2").mouseout(function(){
    $(".headerText2").css("color", "white");
});

$(".headerText3").mouseover(function(){
    $(".headerText3").css("color", "#ffe2a9");
});
$(".headerText3").mouseout(function(){
    $(".headerText3").css("color", "white");
});

$(".headerText4").mouseover(function(){
    $(".headerText4").css("color", "#ffe2a9");
});
$(".headerText4").mouseout(function(){
    $(".headerText4").css("color", "white");
});

/*Hover over backt to top button*/
$(".backtotop").mouseover(function(){
    $(".backtotop").css("background-color", "#2c8dc4");
    $(".backtotop").css("color", "white");
});
$(".backtotop").mouseout(function(){
    $(".backtotop").css("background-color", "white");
    $(".backtotop").css("color", "#2c8dc4");
});