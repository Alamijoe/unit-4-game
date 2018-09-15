console.log("this is working")


var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;


var targetNumber = Math.floor(Math.random() * 120) + 19;
$("#number-to-guess").text(targetNumber);
var counter = 0;


// For each iteration, we will create an imageCrystal
// First each crystal will be given the class ".crystal-image".
// This will allow the CSS to take effect.
// Each imageCrystal will be given a src link to the crystal image
// Lastly, each crystal image (with all it classes and attributes) will get added to the page.

var diamondImage = $("<img>");
diamondImage.addClass("crystal-image");
diamondImage.attr("src", "assets/images/diamond.jpeg");
$("#diamond").append(diamondImage);

var rubyImage = $("<img>");
rubyImage.addClass("crystal-image");
rubyImage.attr("src", "assets/images/ruby.jpeg");
$("#ruby").append(rubyImage);

var emeraldImage = $("<img>");
emeraldImage.addClass("crystal-image");
emeraldImage.attr("src", "assets/images/emerald.jpeg");
$("#emerald").append(emeraldImage);

var sapphireImage = $("<img>");
sapphireImage.addClass("crystal-image");
sapphireImage.attr("src", "assets/images/sapphire.jpeg");
$("#sapphire").append(sapphireImage);

/*
 // We begin by expanding our array to include twelve options.
 var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  
 // Next we create a for loop to create crystals for every numberOption.
 for (var i = 0; i < numberOptions.length; i++) {
 
// Each imageCrystal will be given a data attribute called data-crystalValue.
    diamondImage.attr("data-crystalvalue", numberOptions[i]);
    rubyImage.attr("data-crystalvalue", numberOptions[i]);
    emeraldImage.attr("data-crystalvalue", numberOptions[i]);
    sapphireImage.attr("data-crystalvalue", numberOptions[i]);
 }
 */
//Quiero asignar un numero aleatoria al data-crystalvalue de cada uno de mis elementos
//manual
/*
diamondImage.attr("data-crystalvalue", Math.floor(Math.random()*12+1));
rubyImage.attr("data-crystalvalue", Math.floor(Math.random()*12+1));
emeraldImage.attr("data-crystalvalue", Math.floor(Math.random()*12+1));
sapphireImage.attr("data-crystalvalue", Math.floor(Math.random()*12+1));
*/
var Images = [diamondImage, rubyImage, emeraldImage, sapphireImage];

for (var i = 0; i < Images.length; i++) {
    Images[i].attr("data-crystalvalue", Math.floor(Math.random() * 12 + 1));
}


// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function () {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.

    // Seleccionar el user counter y modificar su texto
    $("#user-counter").text(counter);
    //debug later document.getElementById("user-counter").innerHTML=counter;
    if (counter === targetNumber) {
        winCounter += 1
        alert("You Win!")
        $("#win-counter").text(winCounter);
        reset()
    }

    else if (counter > targetNumber) {
        lossCounter += 1
        alert("You lose!")
        $("#loss-counter").text(lossCounter);
        reset()
    }

});

function reset() {
    counter = 0;
    $("#user-counter").text(counter);
}


