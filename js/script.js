 
 //jquery for toggle dropdown menus

 $(document).ready(function(){

    //toggle sub-menus

    $(".sub-btn").click(function(){
        $(this).next(".sub-menu").slideToggle();
    });

    //toggle more-menus
    
    $(".more-btn").click(function(){
        $(this).next(".more-menu").slideToggle();
    });
});



//javascript for the responsiveness(the hamburger menus)
var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
});


//javascript for the navigation bar effects on scroll (the effects on the navigation when scrolling up and down)
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});