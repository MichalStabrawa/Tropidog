$(function () {
    var okno = $(window);
    var menu = $('#main-nav');

    if (okno.scrollTop() >= 100) {
        menu.addClass('scroll');
    }

    okno.scroll(function () {

        if (okno.scrollTop() >= 100) {
            menu.addClass('scroll');
        } else {
            menu.removeClass('scroll');
        }
    });

    /*Smoth scroll*/

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        var menuHeight = $('#main-nav').height();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - menuHeight
        }, 500);
    });


});

/*Toogle-------------------------------------------------------------------------------------------------------------- */
$(document).ready(function () {
    $(".btn").click(function () {
        $("#div1").toggle(1000);
    });
});


/*Toogle TropidogSuper-content*/
$(document).ready(function () {
    $("#btn-tropidog1").click(function () {
        $("#tropidogSuper-content").slideToggle("slow");
    });
});


$(document).ready(function () {
    $("#btn1-tropidog2").click(function () {
        $("#tropidogPremium-content").slideToggle("slow");
    });
});


/*choose show .btn*/

function smallProducts(){
    var small = document.getElementById('smallDog');
    document.getElementById('mediumDog').style="display:none";
    document.getElementById('largeDog').style="display:none";
    small.style = "display: block";
    
}
document.getElementById('btn-small').addEventListener("click", smallProducts);

function mediumProducts(){
    var medium = document.getElementById('mediumDog');
    document.getElementById('smallDog').style="display:none";
    document.getElementById('largeDog').style="display:none";
    medium.style = "display: block";
}
document.getElementById('btn-medium').addEventListener("click", mediumProducts);

function largeProducts(){
    var large = document.getElementById('largeDog');
    document.getElementById('smallDog').style="display:none";
     document.getElementById('mediumDog').style="display:none";
    large.style = "display: block";
}
document.getElementById('btn-large').addEventListener("click", largeProducts);


/*tootlip*/
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})