$(document).ready(function () {
    $('.image-link').magnificPopup({
        type: 'image'
    });
    
    new WOW().init();
    
    $("#inputTel").mask("+7(999) 999-9999");
    
    $('form').submit(function(event){
        
        if($("#inputTel").val() == "" || $("#inputEmail3").val() == ""){
            event.preventDefault();
            alert("Заполните поле");
        }
        
    });
    
    $('form').submit(function(event){
        event.preventDefault();
        
        $.ajax({
            type: "POST",
            url: "php/mail.php",
            data: $(this).serialize()
        }).done(function (){
            $(this).find("input").val("");
            alert("Успешно отправлено!");
            $('form').trigger("reset");
        });
        return false;
    });
    
    
    
});

$('a[href^="#"]').click(function () {
    let valHref = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(valHref).offset().top - 60 + "px"
    });
});


/* здесь чето навигация активной не становится*/
$(window).scroll(() => {
    let scrollDistance = $(window).scrollTop();

    $("section").each((i, el) => {

        if ($(el).offset().top - $("nav").outerHeight() <= scrollDistance) {
            $("nav a").each((i, el) => {
                if ($(el).hasClass("active")) {
                    $(el).removeClass("active");
                }
            });

            $('nav li:eq(' + i + ')').find('a').addClass('active');
        }

    });

});



/* работает
var type = prompt("Выберите тип сайта: 1 - корпоративный 2 - интернет-магазин");
var design = prompt("Выберите тип сайта: 1 - красивый 2 - очень красивый");
var adapt = prompt("Выберите тип сайта: 1 - адаптивный 2 - неадаптивный");

var p1, p2, p3, t1, t2, t3 = 0;

if (type == 1) {
    p1 = 1000;
    t1 = 1;
} else if (type == 2) {
    p1 = 2000;
    t1 = 2;
}
if (design == 1) {
    p2 = 1000;
    t2 = 1;
} else if (design == 2) {
    p2 = 2000;
    t2 = 2;
}
if (adapt == 1) {
    p3 = 2000;
    t3 = 2;
} else if (adapt == 2) {
    p3 = 1000;
    t3 = 1;
}

var pric = p1 + p2 + p3;
var term = t1 + t2 + t3;


alert("Cтоимость сайта:" + pric + "руб. " + " Срок:" + term + "суток");
*/

$('#js-button').click(function () {
    var value = $('#type option:selected').text();
    var value1 = $('#design option:selected').text();
    var value2 = $('#adapt option:selected').text();

    var p1, p2, p3, t1, t2, t3 = 0;

    if (value == "корпоративный") {
        p1 = 1000;
        t1 = 1;
    }
    if (value == "интернет-магазин") {
        p1 = 2000;
        t1 = 2;
    }
    if (value1 == "красивый") {
        p2 = 1000;
        t2 = 1;
    }
    if (value1 == "очень красивый") {
        p2 = 2000;
        t2 = 2;
    }
    if (value2 == "адаптивный") {
        p3 = 2000;
        t3 = 2;
    }
    if (value2 == "неадаптивный") {
        p3 = 1000;
        t3 = 1;
    }

    var pric = p1 + p2 + p3;
    var term = t1 + t2 + t3;

    $('#js-result').html(pric);
    $('#js-result2').html(term);
});






let options = {threshold: [1]};
let observer = new IntersectionObserver(onEntry, options);
let elements = $('.count');
elements.each((i,el) => {
    observer.observe(el);
});

function onEntry (entry){
entry.forEach(change => {
if(change.isIntersecting){
$('.count').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).data('value')
    }, {
        duration: 10000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
}
})
}









