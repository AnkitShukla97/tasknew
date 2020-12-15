$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav: true,
    dots: true,
    navText: ["<img src='img/arrow-left.png'>","<img src='img/arrow-right.png'>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
})
