

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


/*scrollTop btn*/

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
//function topFunction() {
 //   document.body.scrollTop = 0; // For Chrome, Safari and Opera 
  //  document.documentElement.scrollTop = 0; // For IE and Firefox
//}

//document.getElementById('myBtn').addEventListener('click', topFunction);

$('#myBtn').on('click',function(){
    $('body').animate({
        scrollTop: $('.navbar').offset().top
    },1000)
})


$('#scrollPage').on('click', function(){
    $('body').animate({
        scrollTop: $('#choose').offset().top
    },1000)
})
        
