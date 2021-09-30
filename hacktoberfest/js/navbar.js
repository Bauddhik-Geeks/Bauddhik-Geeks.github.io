/*
 * Change Navbar color while scrolling
*/

$(window).on('scroll', function () {
      handleTopNavAnimation();
 });

$(window).on('load', function () {
      handleTopNavAnimation();
 });


function handleTopNavAnimation() {
    var top=$(window).scrollTop();

    if(top>10){
        $('#mainNav').addClass('navbar_small'); 
    }
    else{
        $('#mainNav').removeClass('navbar_small'); 
    }
}