// $(document).ready(function () {
//     $("#sf_button").hide();
//     $("#la_button").hide();
//     $("#chicago_button").hide();
//     $("#boston_button").hide();
//     $("#providence_button").hide();
//     $("#nyc_button").hide();
//     $("#menu_button").hide();
//     $("#about_button").hide();


//     $("#circle_button").click(function () {
//         $("#sf_button").show();
//         $("#la_button").show();
//         $("#chicago_button").show();
//         $("#boston_button").show();
//         $("#providence_button").show();
//         $("#nyc_button").show();
//         $("#menu_button").show();
//         $("#about_button").show();


//     });


// }); 

var tag = document.getElementById("sf_button");
var button = document.querySelector("button");
button.addEventListener('click', function(){
tag.classList.toggle("sf_button");
});