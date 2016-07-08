$(document).ready(function() {
// all code goes in here
// - Make it so that when we click on a pixel, it changes to white
//   - Notice in the our index.html file each div has the class of 'box'
//   - We can use this box class as our selector. This gives us a way to touch our DOM
    var theBox = $('.box');

    //make all the color buttons work
    //creating our default color var
    var $color = 'white';

    //code a solution so you don't have to hard-code all the colors
    //prob put a class on all color buttons
    //then loop through the classes for another class when a button is clicked
    var $colorBtn = $('.color-button');
    console.log($colorBtn[0]);
    console.log($colorBtn);

    $colorBtn.click(function() {
      for(i=0; i < $colorBtn.length; i++) {
        if($(this).hasClass("red")) {
          $color = 'red';
          console.log('red');
          return;
        }
        else if($(this).hasClass("blue")) {
          $color = 'blue';
          console.log('blue');
          return;
        }
        else if($(this).hasClass("green")) {
          $color = 'green';
          return;
        }
        else if($(this).hasClass("yellow")) {
          $color = 'yellow';
          return;
        }
        else if($(this).hasClass("white")) {
          $color = 'yellow';
          return;
        }
      }
    });

    theBox.click(function() {
      $(this).addClass($color);
    });

    theBox.dblclick(function() {
      $(this).removeClass($color);
    });

    //reset button
    $('#reset').click(function() {
      theBox.removeClass($color);
    });




});
