$(document).ready(function () {

    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();

        $(".section").each((u, el) => {

            if ($(el).offset().top - $("nav").outerHeight() <= scrollDistance) {
                $("nav a").each((i, el) => {
                    if ($(el).hasClass("active")) {
                        $(el).removeClass("active");
                    }
                });

                $('nav li:eq('+ i +')').find('a').addClass('active');
            }

        });

    });

    $(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});
    
});

let type = prompt("Выберите тип сайта: 1 - корпоративный 2 - интернет магазин");
let design = prompt("Выберите тип сайта: 1 - красивый 2 - очень красивый");
let adapt = prompt("Выберите тип сайта: 1 - адаптивный 2 - неадаптивный");

let p1, p2, p3, t1, t2, t3 = 0;

if (type = 1) {
    p1 = 1000;
    t1 = 1;
} 
else {
    p1 = 2000;
    t1 = 2;
}
if (design = 1) {
    p2 = 1000;
    t2 = 1;
} 
else {
    p2 = 2000;
    t2 = 2;
}
if (adapt = 1) {
    p3 = 2000;
    t3 = 2;
} 
else {
    p3 = 1000;
    t3 = 1;
}

let pric = p1 + p2 + p3;
let term = t1 + t2 + t3;

alert("Cтоимость сайта:" + pric + "руб. " + " Срок:" + term + "суток");

$('a[href^="#"]').click(function () {
    let valHref = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(valHref).offset().top - 60 + "px"
    });
});

/*
let options = {threshold: [1]};
let observer = new IntersectionObserver(onEntry, options);
let elements = $('.count');
elements.each((i,el) => {
    observer.observe(el);
});
*/

$('.count').each(function onEntry (entry) {
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


