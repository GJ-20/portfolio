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



        //모바일 네비게이션바 

        $(".header .open").click(function(){
            $(".m_naiv").addClass("m_slide")
            $(this).removeClass("show")
            $(".close").addClass("show")
        })
        $(".header .close").click(function(){
            $(".m_naiv").removeClass("m_slide")
            $(this).removeClass("show")
            $(".open").addClass("show")
        })


   var sc_top;
   var aw_top = $('#award').offset().top;
   var aw_bottom = $('#award').offset().top + $('#award').height();
   var aw_height = 0;

   
    $(window).scroll(function(){
        sc_top = $(window).scrollTop();
        $('.sec').each(function(){
            if($(this).offset().top < sc_top + 100 ){
                $('#side ul li').removeClass('on');
                $("[href='#"+$(this).attr('id')+"']").parent().addClass('on')
            }
        })
        if( sc_top == 0 ){
            $('#side ul li').removeClass('on');
            $("[href='#home']").parent().addClass('on');
        }
        if( aw_top > sc_top ){
            aw_height = 0;
        }


        if( aw_top < sc_top  &&  aw_bottom > sc_top ){
            aw_height = sc_top - aw_top;
        }
        $('.awardall .gray .grayline .yellow').height(aw_height )

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

    const swiper2 = new Swiper('#others .swiper', {
        // Optional parameters
        loop: true,
        autoplay: {
            delay: 5000,
           },
    
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        });


        $(".boxs").height($(".boxs").width())


        ///동영상 슬라이드

        var port_videoArr =[
           { id : 'z4zXxxWHpb4', ex : 'z4zXxxWHpb4', title :'마인드카페 광고페이지', links : [ 'https://ddev20.cafe24.com/gnu/', 'https://www.figma.com/file/fAL4SbUdO4iocLcgGuVYGz/%EB%A7%88%EC%9D%B8%EB%93%9C%EC%B9%B4%ED%8E%98?node-id=219%3A36','https://github.com/GJ-20/portfolio']  },
           { id : '8Tr1qzxFcwQ', ex : '8Tr1qzxFcwQ', title :'마인드카페 광고페이지2', links : [ '#4', '#2','#3']  },
           { id : '5KDai6hvgAs', ex : '5KDai6hvgAs', title :'마인드카페 광고페이지3', links : [ '#5', '#2','#3']  }
        ]

        var count = 0; 
        var numtext;  
        
        $('.pages button').click(function(){
            alert("준비중입니다")
        });
        $('.s_button li').each(function(){
            $(this).find('a').attr('href', port_videoArr[count].links[$(this).index()])
        })

        // $('.pages button').click(function(){
        //     if($(this).hasClass('prevBtn')){
        //         if(count > 0){
        //             count--;
        //         }else{
        //             count = port_videoArr.length - 1;  
        //         }
        //     }else{
        //         count++;
        //     }
        //     count %= port_videoArr.length;
        //     numtext = count + 1
        //     $('#countnum').html(numtext);
        //     $('.s_contents .p_title').html(port_videoArr[count].title);
        //     $('.s_button li').each(function(){
        //         $(this).find('a').attr('href', port_videoArr[count].links[$(this).index()])
        //     })
        //     $('.v_content iframe').attr('src','https://www.youtube.com/embed/'+port_videoArr[count].id+'?autoplay=1&mute=1&modestbranding=1&controls=0&playlist='+port_videoArr[count].ex+'&loop=1')

        // })

        $(".box1").click(function(){
            $(".box1click").addClass("boxon")
        })
        $(".box1click").click(function(){
            $(".box1click").removeClass("boxon")
        })


        $(".box2").click(function(){
            $(".box7click").addClass("boxon")
        })
        $(".box7click").click(function(){
            $(".box7click").removeClass("boxon")
        })


        $(".box3").click(function(){
            $(".box2click").addClass("boxon")
        })
        $(".box2click").click(function(){
            $(".box2click").removeClass("boxon")
        })

        $(".box4").click(function(){
            $(".box3click").addClass("boxon")
        })
        $(".box3click").click(function(){
            $(".box3click").removeClass("boxon")
        })


        $(".box5").click(function(){
            $(".box4click").addClass("boxon")
        })
        $(".box4click").click(function(){
            $(".box4click").removeClass("boxon")
        })


        $(".box6").click(function(){
            $(".box5click").addClass("boxon")
        })
        $(".box5click").click(function(){
            $(".box5click").removeClass("boxon")
        })

        $(".box7").click(function(){
            $(".box6click").addClass("boxon")
        })
        $(".box6click").click(function(){
            $(".box6click").removeClass("boxon")
        })

        $(".box8").click(function(){
            $(".box8click").addClass("boxon")
        })
        $(".box8click").click(function(){
            $(".box8click").removeClass("boxon")
        })

    }) ////ready

       