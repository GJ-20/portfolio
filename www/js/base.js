AOS.init();

$(document).ready(function(){

$("#side a").click(function(e){
    e.preventDefault();
    $("#side li").removeClass("on")
    $(this).parent().addClass("on")

    $("body, html").animate({
        scrollTop : $($(this).attr("href")).offset().top
    },400)
})

    const swiper = new Swiper('#experince .swiper', {
        // Optional parameters
       slidesPerView: 2,
       spaceBetween: 10,

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {

        
            768: {
              slidesPerView:3,  //브라우저가 768보다 클 때
              spaceBetween: 10,
            },
            1024: {
              slidesPerView:4,  //브라우저가 1024보다 클 때
              spaceBetween:5,
            },
        },
        autoplay: {
         delay: 2000,
        },
        loop: true,
    
        // If we need pagination
        pagination: {
            el: '#me .swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
            nextEl: '#me .swiper-button-next',
            prevEl: '#me .swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
            el: '#me .swiper-scrollbar',
        },
        });

})




