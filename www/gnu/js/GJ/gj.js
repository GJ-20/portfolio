$(document).ready(function(){
    AOS.init(); //실행식은 단순하게, 태그는 직접 수정가능.


    //지도 설정
    var mapContainer = document.getElementById('map1'),
        mapOption = { 
            center: new kakao.maps.LatLng(37.37817331629273,127.11231931061953),
            level: 3					
        };
    
    var mapContainer2 = document.getElementById('map2'),
        mapOption2 = { 
        center: new kakao.maps.LatLng(37.528583039069005,126.99315546807001),
        level: 3			
    };

    const map = new kakao.maps.Map(mapContainer, mapOption);
    
    const map2 = new kakao.maps.Map(mapContainer2, mapOption2);
    

    var marker = new kakao.maps.Marker({ 
        // 지도 중심좌표에 마커를 생성합니다 
        position: map.getCenter()      
    });
    var marker2 = new kakao.maps.Marker({ 

        position: map2.getCenter()      
    });  
        // 지도에 마커를 표시합니다
        marker.setMap(map);
        marker2.setMap(map2);
    
        //카카오맵 클릭 이벤트 추가
        kakao.maps.event.addListener(map, 'click', (mouseEvent) => {
    
        marker.setPosition(latlng);
        marker.setMap(map);

        alert(`위도 : ${latlng.getLat()}, 경도 : ${latlng.getLng()}`);
    });
    kakao.maps.event.addListener(map2, 'click', (mouseEvent) => {

        marker2.setPosition(latlng);
        marker2.setMap(map2);

        alert(`위도 : ${latlng.getLat()}, 경도 : ${latlng.getLng()}`);
    });

    function resizeMap() {
        var mapContainer = document.getElementById('map');
        mapContainer.style.width = '1110px';
    }




    //네비게이션

    $(".gnb_1da").click(function(){
        $('body, html').animate({
                scrollTop : ($($(this).attr('href')).offset().top-80)
            }, 400);
    })




    //지도 탭
    $(".center a").click(function(e){
        e.preventDefault();
        $("#contents > div").removeClass("act");
        $($(this).attr('href')).addClass("act");
        $(".center a").removeClass('color');
        $(this).addClass("color")
        
        //지도2 재업로딩
        window.setTimeout(function() {
            map2.relayout();
            map2.setCenter(new kakao.maps.LatLng(37.528583039069005,126.99315546807001)), 
            map2.setLevel(3)
        }, 0);
        

       
    })

})
