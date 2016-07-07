$(document).ready(function() {
// all code goes in here
// - Make it so that when we click on a pixel, it changes to white
//   - Notice in the our index.html file each div has the class of 'box'
//   - We can use this box class as our selector. This gives us a way to touch our DOM
    var theBox = $('.box');
    theBox.click(function() {
      $(this).addClass('white');
    });

    theBox.dblclick(function() {
      $(this).removeClass('white');
    });

    //reset button
    $('#reset').click(function() {
      theBox.removeClass('white');
    });

    //make all the color buttons work
    //creating our default color var
    var color = 'white';

    //code a solution so you don't have to hard-code all the colors
    //prob put a class on all color buttons
    //then loop through the classes for another class when a button is clicked



});
