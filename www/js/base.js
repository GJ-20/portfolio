$(document).ready(function(){

    $("#allmenu").click(function(){
        $(this).toggleClass("open");
    })
  
    $("a.scroll-page").click(function(e){
        e.preventDefault();
        var clicka = $(this)
        
        $("body,html").animate({
            scrollTop:($(clicka.attr("href")).offset().top - 120)
        },400,function(){
        //gnb a
            $("#gnb a").removeClass("act")
            clicka.addClass("act");
    })
    })

    const swiper = new Swiper('#me .swiper', {
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




